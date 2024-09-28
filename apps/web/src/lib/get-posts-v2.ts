import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

// @note pass this to a .env file
const secret = 'secret_Bsj0GoBK8c5qDxSfka889FbOtgVbwqJcm5MWKqKNaoK'
const databaseId = 'ce6e4715a5a34724b2d1d7651e1d3d9e'

const notion = new Client({ auth: secret })
const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true, // default: false
    parseChildPages: false,
  },
})

export const getPosts = async () => {
  try {
    const posts = await notion.databases.query({
      database_id: databaseId,
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

    const post = posts.results[0]

    const { results } = await notion.blocks.children.list({ block_id: post.id })
    console.log({ post })
    console.log({ blocks: results })
    const x = await n2m.blocksToMarkdown(results)
    console.log('markdown>>>>>', x)
    // const mdblocks = await n2m.pageToMarkdown(post.id);
    // console.log({ mdblocks })
    // const blocksMd = await n2m.blocksToMarkdown(mdblocks)
    // console.log('blocksToMarkdown >>>>>> ', { blocksMd })
    const mdString = n2m.toMarkdownString(x)

    console.log({ mdString })
    return mdString.parent
  } catch (e) {
    console.error(e)
  }
}
