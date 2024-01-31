import Link from "next/link";
import Image from "next/image";
import { Icon } from "@westeros/ui/icon";

export default function Page(): JSX.Element {
  return (
    <div className="flex min-h-screen justify-center bg-dark text-white">
      {/* container */}
      <div className="w-full max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* header */}
        <header className="flex flex-col items-center justify-between border-b border-gray-700 p-4 sm:flex-row">
          <Link className="mb-4 text-xl font-semibold sm:mb-0" href="#">
            juliovaz.com
          </Link>
          <nav>
            <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <li>
                <Link className="flex hover:underline" href="#">
                  <Icon className="mr-xxsmall" color="white" name="text" />
                  Posts
                </Link>
              </li>
              <li>
                <Link className="mr-xxsmall flex hover:underline" href="#">
                  <Icon
                    className="mr-xxsmall"
                    color="white"
                    name="user-round"
                  />
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* main */}
        <main className="p-4">
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
              <h1 className="mb-2 text-3xl font-bold">
                Oi, eu sou Julio Vaz 👋
              </h1>
              <p className="mb-4">
                Trabalho com desenvolvimento de software há 6 anos.
              </p>
              <p className="mb-4">
                Durante todos esses anos, trabalhei com diversas tecnologias,
                linguagens e frameworks. Pude adquirir experiência para liderar
                projetos e realizar entregas de qualidade.
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
                href="#"
              >
                <span>See more</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* space-y-4 */}
              <Link className="mb-2" href="#">
                <div className="group/item rounded-md bg-gray-700 p-4 transition duration-150 ease-out hover:bg-gray-600 hover:ease-in">
                  <div className="flex items-center justify-between">
                    <div className="col-auto md:w-full lg:w-4/5">
                      <h3 className="mb-2 text-xl font-bold">
                        Event Loop, como funciona
                      </h3>
                      <p className="mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book
                      </p>
                    </div>
                    <div className="max-md:hidden">
                      <Icon
                        className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
                        name="arrow-right"
                      />
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-gray-400">Jan 29, 2023</p>
                </div>
              </Link>
              <Link className="mb-2" href="#">
                <div className="group/item rounded-md bg-gray-700 p-4 transition duration-150 ease-out hover:bg-gray-600 hover:ease-in">
                  <div className="flex items-center justify-between">
                    <div className="col-auto w-4/5">
                      <h3 className="mb-2 text-xl font-bold">
                        Event Loop, como funciona
                      </h3>
                      <p className="mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book
                      </p>
                    </div>

                    <Icon
                      className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
                      name="arrow-right"
                    />
                  </div>
                  <p className="mb-2 text-sm text-gray-400">Jan 29, 2023</p>
                </div>
              </Link>
            </div>
          </section>
          <section>
            <div className="mb-4 flex flex-col items-center justify-between sm:flex-row">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <Link
                className="mt-4 flex items-center space-x-2 text-sky-500 hover:underline sm:mt-0"
                href="#"
              >
                <span>See more</span>
              </Link>
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
                    desenvolvimento de admin para gerar novos conteudos para o
                    site.
                  </p>
                  <Icon
                    className="group/edit invisible h-6 w-6 text-sky-500 transition duration-150 ease-out hover:ease-in group-hover/item:visible"
                    name="arrow-right"
                  />
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
