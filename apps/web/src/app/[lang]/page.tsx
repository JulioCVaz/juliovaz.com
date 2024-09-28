import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@westeros/ui/icon'
// import { format, parseISO } from "date-fns";
// import Card from "../../components/card";
import ReactMarkdown from 'react-markdown'
// import { getDictionary } from "../../lib/get-dictionary";
// import { getPosts, type Post } from "../../lib/get-posts";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getPosts } from '../../lib/get-posts-v2'
import type { Locale } from '../../lib/i18n-config'

async function getAllPosts() {
  const data = await getPosts()
  const response = data

  // if (!data.results.length) {
  //   console.log("Error to fetch all posts", data.results);
  // }

  return response
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<JSX.Element> {
  // const posts = await getPosts(lang);
  // const dictionary = await getDictionary(lang);

  const data = await getAllPosts()

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
          children={data}
          className="line-break"
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(?:\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[0].split('language-')[1]}
                  style={tomorrow}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </section>
    </>
  )
}
