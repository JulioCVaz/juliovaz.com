import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@westeros/ui/icon";
// import { format, parseISO } from "date-fns";
// import Card from "../../components/card";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import ReactMarkdown from "react-markdown";
// import { getDictionary } from "../../lib/get-dictionary";
// import { getPosts, type Post } from "../../lib/get-posts";
import rehypeRaw from "rehype-raw";
import remarkMdx from "remark-mdx";
import remarkBreaks from "remark-breaks";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { getPosts } from "../../lib/get-posts-v2";
import type { Locale } from "../../lib/i18n-config";

async function getAllPosts() {
  const data = await getPosts();
  const response = data;

  // if (!data.results.length) {
  //   console.log("Error to fetch all posts", data.results);
  // }

  return response;
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<JSX.Element> {
  // const posts = await getPosts(lang);
  // const dictionary = await getDictionary(lang);

  const data = await getAllPosts();

  console.log({ data });

  const { content } = await compileMDX({
    source: data,
  });

  return (
    <>
      <section className="mb-8 flex items-center justify-between">
        {/* avatar */}
        <div className="w-1/4 max-md:hidden md:max-lg:w-2/5">
          <Image
            alt="profile image"
            className="rounded-full"
            height={160}
            src="https://d111erjd7vhu4f.cloudfront.net/profile.jpg"
            width={160}
          />
        </div>
        {/* about */}
        <div className="w-full">
          {/* <h1 className="mb-2 text-3xl font-bold">
            {dictionary.home.greeting}
          </h1>
          <p className="mb-4">{dictionary.home.about.experience}</p>
          <p className="mb-4">{dictionary.home.about.jobs}</p>
          <p className="mb-4">{dictionary.home.about.focus}</p> */}
        </div>
      </section>
      {/* social media */}
      <section className="mb-8">
        {/* <h2 className="mb-4 text-2xl font-semibold">
          {dictionary.actions.labels.contact}
        </h2> */}
        <div className="flex space-x-4">
          <Link
            className="h-6 w-6"
            href="mailto:julio.oliveiravaz0@gmail.com"
            target="_blank"
            title="e-mail"
          >
            <Icon color="white" name="mail" />
          </Link>
          <Link
            className="h-6 w-6"
            href="https://github.com/JulioCVaz"
            target="_blank"
            title="github"
          >
            <Icon color="white" name="github" />
          </Link>
          <Link
            className="h-6 w-6"
            href="https://dev.to/juliovaz"
            target="_blank"
            title="dev.to"
          >
            <Icon color="white" name="newspaper" />
          </Link>
          <Link
            className="h-6 w-6"
            href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-vaz-560ab4127/"
            target="_blank"
            title="linkedin"
          >
            <Icon color="white" name="linkedin" />
          </Link>
          <Link
            className="h-6 w-6"
            href="https://twitter.com/juliovazbr"
            target="_blank"
            title="twitter/x"
          >
            <Icon color="white" name="twitter" />
          </Link>
        </div>
      </section>
      {/* blog */}
      <section className="mb-8">
        <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
          {/* <h2 className="text-2xl font-semibold">
            {dictionary.actions.labels.posts}
          </h2>
          <Link
            className="mt-4 flex items-center space-x-2 text-sky-500 hover:underline sm:mt-0"
            href="/blog"
          >
            <span>{dictionary.actions.labels.see_more}</span>
          </Link> */}
        </div>
        {/* <div className="grid grid-cols-1 gap-4">
          {posts.map((post: Post) => (
            <Card.Base
              extended
              key={post._id}
              link={{
                href: `/blog/${post.slug}`,
                target: "_self",
              }}
              linkable
            >
              <Card.Title>{post.title}</Card.Title>
              <Card.Body>{post.description}</Card.Body>
              <Card.Footer>
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </Card.Footer>
            </Card.Base>
          ))}
        </div> */}
        <ReactMarkdown
          // parserOptions={{ commonmark: true }}
          // rehypePlugins={[rehypeRaw]}
          // remarkPlugins={[remarkBreaks]}
          className="line-break"
          // rehypePlugins={[
          //   rehypeSlug, // For generating slugs for headings
          //   [
          //     rehypeAutolinkHeadings,
          //     {
          //       properties: {
          //         className: ["anchor"],
          //       },
          //     },
          //   ],
          //   rehypeCodeTitles,
          //   [
          //     rehypePrettyCode,
          //     {
          //       theme: "ayu-dark",
          //       onVisitHighlightedLine(node) {
          //         if (node.properties.className) {
          //           const nodeClass = node.properties.className;
          //           nodeClass.push("line--highlighted");
          //         } else {
          //           node.properties = {
          //             className: ["line--highlighted"],
          //           };
          //         }
          //       },
          //     },
          //   ],
          // ]}
          remarkPlugins={[
            // remarkParse,
            // remarkBreaks,
            // remarkRehype,
            // rehypeStringify,
            remarkGfm,
            // ,
            // // ,

            // remarkMdx,
          ]}
        >
          {/* @FIX: https://github.com/remarkjs/react-markdown/issues/273#issuecomment-683754992 */}
          {data}
        </ReactMarkdown>
        <React.Suspense fallback={<>Loading...</>}>
          <MDXRemote
            // SOLVE PROBLEM TO IGNORE /N https://stackoverflow.com/a/76972651
            options={{
              // parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [
                  // remarkParse,
                  // remarkBreaks,
                  // remarkRehype,
                  // rehypeStringify,
                  remarkGfm,
                  // ,
                  // // ,

                  // remarkMdx,
                ],
                rehypePlugins: [
                  rehypeRaw,
                  rehypeSlug, // For generating slugs for headings
                  [
                    rehypeAutolinkHeadings,
                    {
                      properties: {
                        className: ["anchor"],
                      },
                    },
                  ],
                  rehypeCodeTitles,
                  [
                    rehypePrettyCode,
                    {
                      theme: "ayu-dark",
                      onVisitHighlightedLine(node) {
                        if (node.properties.className) {
                          const nodeClass = node.properties.className;
                          nodeClass.push("line--highlighted");
                        } else {
                          node.properties = {
                            className: ["line--highlighted"],
                          };
                        }
                      },
                    },
                  ],
                ],
                format: "mdx",
              },
            }}
            // https://github.com/remarkjs/react-markdown/issues/278
            // https://github.com/remarkjs/react-markdown/issues/278#issuecomment-1765161662
            source={data.replace(/(?<=\n\n)(?![*-])\n/gi, "&nbsp;\n ")}
          />
        </React.Suspense>
        {/* {content} */}
      </section>
    </>
  );
}
