import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import getT from "next-translate/getT";
import { Button } from "../components/Button";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const Home = (props: any) => {
  return (
    <>
      <Head>
        <title>Julio Vaz - Home</title>
        <meta name="description" content="Julio's Vaz website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="outline">outline</Button>
      <Button>content</Button>
      <section>
        <div>
          <p>{props?.greeting}</p>
          <Image
            src="/profile.jpg"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div>
          <p>
            I've been working with software engineering for over 6 years,
            currently I'm working on the core team at{" "}
            <strong>
              <Link href="https://juntossomosmais.com.br" target="_blank">
                Juntos Somos mais
              </Link>
            </strong>
            . Working on projects with Nextjs.
          </p>
        </div>
      </section>
      <aside>
        <Link
          href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-vaz-560ab4127"
          target="_blank"
        >
          <LinkedInIcon
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </Link>
        <Link href="https://github.com/JulioCVaz" target="_blank">
          <GitHubIcon
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </Link>
        <Link href="#" target="_blank">
          <LogoDevIcon
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </Link>
      </aside>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  const t = await getT(locale, "common");
  const greeting = t("greeting");

  return {
    props: { greeting },
  };
}
