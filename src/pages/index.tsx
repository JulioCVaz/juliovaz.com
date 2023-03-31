import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Julio Vaz - Home</title>
        <meta name="description" content="Julio's Vaz website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside className={styles["menu-left"]}>Left menu</aside>
      <section className={styles.main}>
        <div className={styles.center}>
          <p className={styles["profile-greeting"]}>
            <strong>Hi</strong>, I am{" "}
            <strong>
              Julio Vaz{" "}
              <span role="img" aria-label="waving hang">
                👋
              </span>
            </strong>
          </p>
          <Image
            className={styles["profile-avatar"]}
            src="/profile.jpg"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={styles.center}>
          <p className={styles["profile-description"]}>
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
      <aside className={styles["menu-rigth"]}>Right menu</aside>
    </>
  );
}
