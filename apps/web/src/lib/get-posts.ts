import { Client, isFullPageOrDatabase } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const NOTION_CONFIG = {
  secret: 'secret_Bsj0GoBK8c5qDxSfka889FbOtgVbwqJcm5MWKqKNaoK',
  pt: { database_id: '1172cb4e5fa680daa157c548c3cf3a20' },
  en: { database_id: '1172cb4e5fa68072809fe8e22f11fcb8' },
};

const notion = new Client({ auth: NOTION_CONFIG.secret })

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true, // default: false
    parseChildPages: false,
  },
})

type Locale = 'pt' | 'en'


type ParsedPage = {
  title: string | undefined;
  description: string | undefined;
  created_at: string | undefined;
};

export const getPosts = async (locale: Locale = 'pt') => {
  const parsePage = (page: Record<string, any>): ParsedPage => ({
    title: page.properties['Title']?.title?.[0]?.plain_text,
    description: page.properties['Description']?.rich_text?.[0]?.plain_text,
    created_at: page.properties['Created Date']?.created_time,
  });

  try {
    const posts = await notion.databases.query({
      database_id: NOTION_CONFIG[locale].database_id,
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

    if (posts.results.length < 1) {
      return posts.results
    }

    const list = []

    for (const page of posts.results) {
      if (!isFullPageOrDatabase(page)) {
        continue
      }

      list.push({
        id: page.id,
        ...parsePage(page)
      })
    }

    return list

  } catch (e) {
    // @todo: redirect to a 500 page error
    console.error(e)
  }
}


// @note: get post content
export const getPost = () => {

// const { results } = await notion.blocks.children.list({ block_id: post.id })
// const x = await n2m.blocksToMarkdown(results)
    // const mdString = n2m.toMarkdownString(x)

    // return mdString.parent
}