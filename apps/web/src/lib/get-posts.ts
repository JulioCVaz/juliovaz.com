'use server'

import { Client, isFullPageOrDatabase } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const NOTION_ACCESS = {
  secret: process.env.NOTION_SECRET as string,
  pt: { database_id: process.env.NOTION_PT_DB_ID as string },
  en: { database_id: process.env.NOTION_EN_DB_ID as string },
};

const notionClient = new Client({ auth: NOTION_ACCESS.secret })
const notionConfig = {
  separateChildPage: true, // default: false
  parseChildPages: false,
}

const n2m = new NotionToMarkdown({
  notionClient,
  config: notionConfig,
})

type Locale = 'pt' | 'en'

type PageProps = {
  title?: string;
  description?: string;
  created_at?: string;
};

const parsePage = (page: Record<string, any>): PageProps => ({
  title: page.properties['Title']?.title?.[0]?.plain_text,
  description: page.properties['Description']?.rich_text?.[0]?.plain_text,
  created_at: page.properties['Created Date']?.created_time,
});

/**
 * getPosts
 * @param locale 
 * @returns 
 */
export const getPosts = async (locale: Locale = 'pt') => {
  try {
    const { results } = await notionClient.databases.query({
      database_id: NOTION_ACCESS[locale].database_id,
      filter: {
        and: [
          {
            property: 'Status',
            status: {
              equals: 'Done',
            },
          },
          {
            property: 'Select',
            select: {
              equals: 'Publishable',
            },
          },
        ],
      },
    })
  
    if (results.length < 1) {
      return results
    }
  
    const posts = []
    for (const page of results) {
      if (!isFullPageOrDatabase(page)) {
        continue
      }
  
      posts.push({
        id: page.id,
        ...parsePage(page)
      })
    }
  
    return posts
  } catch (error) {
    throw new Error('Failed to loading posts')
  } 
}

/**
 * getPost
 * @param postId 
 * @returns 
 */
export const getPost = async (postId: string) => {
  try {
    const response = await notionClient.pages.retrieve({ page_id: postId })
    const parsedResponse = parsePage(response)
  
    const { results } = await notionClient.blocks.children.list({ block_id: postId })
    const convertBlocksToMarkdown = await n2m.blocksToMarkdown(results)
    const { parent: markdown } = n2m.toMarkdownString(convertBlocksToMarkdown)
  
    const post = {
      title: parsedResponse.title,
      date: parsedResponse.created_at,
      content: markdown
    }

    return post
  } catch (error) {
    throw new Error('Failed to loading post')
  }
}