// import { Functional } from "@westeros/sdk"
import { compareAsc, compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post as ContentLayerPost } from "contentlayer/generated";

// utils
const dateFormat = "LLLL d, yyyy"

type PostsOrder = "desc" | "asc"

export type Post = ContentLayerPost

const filterPostsByLang = (lang: string): Post[] => {
    return allPosts.filter((post: Post) => post._id.includes(`/${lang}/`))
}

const sortPostByOrder = (posts: Post[], order: string): Post[] => {
    if (order === 'desc') {
        return posts.sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date))

        })
    }

    return posts.sort((a, b) => {
        return compareAsc(new Date(a.date), new Date(b.date));
    })

}

// TODO: apply functional programming
export const getPosts = (lang: string, order: PostsOrder = 'desc'): Promise<Post[]> => new Promise((resolve) => {
    const filteredPosts = filterPostsByLang(lang)
    const sortedPosts = sortPostByOrder(filteredPosts, order)
    resolve(sortedPosts)
})

export const getPostBySlug = (slug: string) => allPosts.find(
    (post: Post) => post.slug === slug,
);

export const getPostDate = (post: Post) => format(parseISO(post.date), dateFormat)
