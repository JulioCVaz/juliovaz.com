import Link from "next/link";
import Image from "next/image";
import { Icon } from "@westeros/ui/icon";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import Card from "../../components/card";
import type { Locale } from "../../i18n-config";

export default function Page({
  params,
}: {
  params: { lang: Locale };
}): JSX.Element {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
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
          <h1 className="mb-2 text-3xl font-bold">Oi, eu sou Julio Vaz 👋</h1>
          <p className="mb-4">
            Trabalho com desenvolvimento de software há 6 anos.
          </p>
          <p className="mb-4">
            Durante esses anos, trabalhei com diversas tecnologias, linguagens e
            frameworks. Pude adquirir experiência para liderar projetos e
            realizar entregas de qualidade.
          </p>
          <p className="mb-4">
            Atualmente foco em arquitetura de software, CI/CD, testes e
            monitoramento. Trabalhar na formação de novos desenvolvedores na
            equipe, compartilhar e adquirir novos conhecimentos.
          </p>
        </div>
      </section>
      {/* social media */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Get in touch</h2>
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
          <h2 className="text-2xl font-semibold">Posts</h2>
          <Link
            className="mt-4 flex items-center space-x-2 text-sky-500 hover:underline sm:mt-0"
            href="/blog"
          >
            <span>See more</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
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
        </div>
      </section>
      <section>
        <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
          <h2 className="text-2xl font-semibold">Projects</h2>
          {/* <Link
            className="mt-4 flex items-center space-x-2 text-sky-500 hover:underline sm:mt-0"
            href="/projetos"
          >
            <span>Veja mais</span>
          </Link> */}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            className="mb-2"
            href="https://eteczonaleste.com.br/"
            target="_blank"
          >
            <div className="group/item rounded-md bg-gray-700 p-4 transition duration-150 ease-out hover:bg-gray-600 hover:ease-in">
              {/* add loader = https://nextjs.org/docs/app/api-reference/components/image#loader */}
              <Image
                alt="Project 1"
                className="mb-2 h-48 w-full"
                height={500}
                quality={75}
                src="https://d111erjd7vhu4f.cloudfront.net/project_etec_zl.png"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={500}
              />
              <h3 className="mb-2 text-xl font-bold">
                Etec Zona Leste - Site institucional
              </h3>
              <p className="mb-2">
                Site institucional da escola tecnica Etec zona leste e
                desenvolvimento de admin para gerar novos conteudos para o site.
              </p>
              <Icon
                className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
                name="arrow-right"
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
