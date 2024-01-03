import Link from "next/link";
import Image from "next/image";
import { Icon } from "@westeros/ui/icon";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-dark text-white">
      {/* container */}
      <div className="w-full p-8 md:max-w-full lg:max-w-5xl">
        {/* navbar */}
        <nav className="mb-20 mt-6 flex w-full justify-between">
          <Link className="" href="#">
            juliovaz.com
          </Link>
          <div className="flex w-1/6 justify-between">
            <Link className="" href="#">
              <Icon color="white" name="text" />
              Posts
            </Link>
            <Link className="" href="#">
              <Icon color="white" name="user-round" />
              About
            </Link>
          </div>
        </nav>
        {/* header */}
        <div className="flex justify-between">
          {/* avatar */}
          <div className="flex w-1/3 items-center justify-center">
            <Image
              alt="profile image"
              className="rounded-full"
              height={200}
              src="https://d111erjd7vhu4f.cloudfront.net/profile.jpg"
              width={200}
            />
          </div>
          {/* about */}
          <div className="w-2/3">
            <h1 className="pb-8 text-medium">Oi, eu sou Julio Vaz 👋</h1>
            <p className="pb-3 text-small">
              Trabalho com desenvolvimento de software há 6 anos.
            </p>
            <p className="pb-3 text-small">
              Durante todos esses anos, trabalhei com diversas tecnologias,
              linguagens e frameworks. Pude adquirir experiência para liderar
              projetos e realizar entregas de qualidade.
            </p>
            <p className="pb-3 text-small">
              Atualmente foco em arquitetura de software, CI/CD, testes e
              monitoramento. Trabalhar na formação de novos desenvolvedores na
              equipe, compartilhar e adquirir novos conhecimentos.
            </p>
          </div>
        </div>
        {/* social media */}
        <div className="mt-large">
          <h2>Get in touch</h2>
          <div className="mt-large flex w-1/6 justify-between">
            <Link
              href="mailto:julio.oliveiravaz0@gmail.com"
              target="_blank"
              title="e-mail"
            >
              <Icon color="white" name="mail" />
            </Link>
            <Link href="#" target="_blank" title="linkedin">
              <Icon color="white" name="linkedin" />
            </Link>
            <Link href="#" target="_blank" title="twitter/x">
              <Icon color="white" name="twitter" />
            </Link>
            <Link href="#" target="_blank" title="dev.to">
              <Icon color="white" name="newspaper" />
            </Link>
          </div>
        </div>
        {/* blog */}
        <div className="mt-large">
          <h2>Posts</h2>
          <div className="mt-large">
            <div className="border-white-500 mb-large h-12 w-full border" />
            <div className="border-white-500 mb-large h-12 w-full border" />
            <div className="border-white-500 mb-large h-12 w-full border" />
          </div>
        </div>
        <div className="mt-large">
          <h2>Projects</h2>
          <div className="mt-large">
            <div className="grid grid-cols-2 gap-2">
              <div className="border-white-500 mb-large h-xgiant w-full border" />
              <div className="border-white-500 mb-large h-xgiant w-full border" />
              <div className="border-white-500 mb-large h-xgiant w-full border" />
              <div className="border-white-500 mb-large h-xgiant w-full border" />
              <div className="border-white-500 mb-large h-xgiant w-full border" />
              <div className="border-white-500 mb-large h-xgiant w-full border" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
