import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import getT from "next-translate/getT";
import { Button } from "../components/Button";

import GitHubIcon from "../../icons/GitHub.svg";
import LinkedInIcon from "../../icons/LinkedIn.svg";
import DevToIcon from "../../icons/Code.svg";
import TwitterIcon from "../../icons/Twitter.svg";
import MenuIcon from "../../icons/Menu.svg";

import styles from "./index.module.scss";

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
      <div className={styles.main}>
        <div className={styles["page-label"]}>
          <div className="label">
            <span>HOME</span>
          </div>
          <div className="label">
            <span>ABOUT</span>
          </div>
          <div className="label">
            <span>EXPERIENCES</span>
          </div>
          <div className="label">
            <span>PROJECTS</span>
          </div>
        </div>
        <div className={styles["page-nav"]}>
          <div className={styles["circle-nav"]}></div>
          <div className={styles["circle-nav"]}></div>
          <div className={styles["circle-nav"]}></div>
          <div className={styles["circle-nav"]}></div>
        </div>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.social}>
              <a href="https://github.com/JulioCVaz" target="_blank">
                <Image priority src={GitHubIcon} alt="github icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-vaz-560ab4127/"
                target="_blank"
              >
                <Image priority src={LinkedInIcon} alt="linkedin icon" />
              </a>
              <a href="https://dev.to/juliovaz" target="_blank">
                <Image priority src={DevToIcon} alt="dev.to icon" />
              </a>
              <a href="https://twitter.com/juliovazbr" target="_blank">
                <Image priority src={TwitterIcon} alt="twitter icon" />
              </a>
            </div>
            <div className={styles.menu}>
              <a href="#">
                <Image priority src={MenuIcon} alt="menu icon" />
              </a>
            </div>
          </header>

          <section id={styles.home}>
            <div className={styles.description}>
              <h1 className={styles["description-greeting"]}>
                <strong>Hi</strong>, I'm <strong>Julio Vaz</strong>
              </h1>
              <p className={styles["description-carrer"]}>
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
              </p>
              <p className={styles["description-technologies"]}>
                Working on projects with
                <span className={styles["description-technology"]}>nextjs</span>
              </p>
              <div className={styles["home-links"]}>
                <a
                  className="button button-outline"
                  href="https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view?usp=sharing"
                  target="_blank"
                  role="button"
                >
                  Resume
                </a>
                <a className="button" href="" role="button">
                  Blog
                </a>
              </div>
            </div>
          </section>
          <section id={styles["about-me"]}>
            <div className={styles["about-me-avatar"]}>
              <img src="./public/profile.jpg" alt="avatar-profile" />
            </div>
            <div className={styles["about-me-description"]}>
              <p>
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
                I've been working with software engineering for over 6 years,
                currently I'm working on the core team at Juntos Somos mais.
              </p>
              <p>
                Working on projects with <span>nextjs</span>
              </p>
            </div>
          </section>
          <section id={styles.experiences}>
            <div className={styles["experiences-container"]}>
              <div className={styles["experiences-timeline"]}>
                <div className={styles.experiences}>
                  <div className={styles["experience-title"]}>
                    <h3>Juntos Somos Mais</h3>
                    <div className={styles["experience-subtitle"]}>
                      <span>Software Engineer - Core Team</span>
                      <span className={styles["current-experience"]}>
                        2021 - Current
                      </span>
                    </div>
                  </div>
                  <p className={styles["experience-description"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    laoreet metus vel sem eleifend iaculis. Quisque lacinia arcu
                    ac sem bibendum, non blandit est blandit.
                  </p>
                </div>
                <div className={styles.experiences}>
                  <div className={styles["experience-title"]}>
                    <h3>Looqbox</h3>
                    <div className={styles["experience-subtitle"]}>
                      <span>Mobile Developer</span>
                      <span>2020 - 2021</span>
                    </div>
                  </div>
                  <p className={styles["experience-description"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    laoreet metus vel sem eleifend iaculis. Quisque lacinia arcu
                    ac sem bibendum, non blandit est blandit.
                  </p>
                </div>
                <div className={styles.experiences}>
                  <div className={styles["experience-title"]}>
                    <h3>Grupo KRS</h3>
                    <div className={styles["experience-subtitle"]}>
                      <span>Software Developer</span>
                      <span>2017 - 2020</span>
                    </div>
                  </div>
                  <p className={styles["experience-description"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    laoreet metus vel sem eleifend iaculis. Quisque lacinia arcu
                    ac sem bibendum, non blandit est blandit.
                  </p>
                </div>
              </div>
              <div className={styles["experiences-mosaic"]}></div>
            </div>
          </section>
          <section id={styles.projects}></section>
        </div>
      </div>
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
