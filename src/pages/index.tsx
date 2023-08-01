import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import getT from "next-translate/getT";
import { Button } from "../components/Button";

import GitHubIcon from "../../icons/GitHub.svg";
import LinkedInIcon from "../../icons/LinkedIn.svg";
import DevToIcon from "../../icons/Code.svg";
import TwitterIcon from "../../icons/Twitter.svg";
import MenuIcon from "../../icons/Menu.svg";
import AvatarImg from "../../public/profile.jpg";

import styles from "./index.module.scss";

const Home = ({ i18n }: any) => {
  console.log({ i18n });
  return (
    <>
      <Head>
        <title>Julio Vaz</title>
        <meta name="description" content="Julio's Vaz website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles["page-label"]}>
          <div className="label">
            <span>{i18n.sections.about.title}</span>
          </div>
          <div className="label">
            <span>{i18n.sections.experiences}</span>
          </div>
          <div className="label">
            <span>{i18n.sections.projects}</span>
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
                <strong>{i18n.greeting.greeting}</strong>, {i18n.greeting.iam}{" "}
                <strong>{i18n.greeting.name}</strong>
              </h1>
              <p className={styles["description-carrer"]}>
                {i18n.sections.about.content.about}{" "}
                <Link
                  href="https://juntossomosmais.com.br"
                  target="_blank"
                  about="juntos somos mais - fidelizacao"
                >
                  {i18n.sections.about.content.aboutCompany}
                </Link>{" "}
                {i18n.sections.about.content.aboutExperience}
              </p>
              <p className={styles["description-technologies"]}>
                {i18n.sections.about.content.aboutTechnologies}{" "}
                <span className={styles["description-technology"]}>nextjs</span>
              </p>
              <div className={styles["home-links"]}>
                <Button
                  type="outline"
                  link="https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view?usp=sharing"
                >
                  {i18n.sections.about.actions.buttons.resume}
                </Button>
                <Button link="#">
                  {i18n.sections.about.actions.buttons.blog}
                </Button>
              </div>
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
              <div className={styles["about-me"]}>
                <div className={styles["about-me-avatar"]}>
                  <Image
                    width={200}
                    height={200}
                    src={AvatarImg}
                    alt="avatar-profile"
                  />
                </div>
                <div className={styles["about-me-description"]}>
                  <p>
                    I've been working with software engineering for over 6
                    years, currently I'm working on the core team at Juntos
                    Somos mais. I've been working with software engineering for
                    over 6 years, currently I'm working on the core team at
                    Juntos Somos mais. I've been working with software
                    engineering for over 6 years, currently I'm working on the
                    core team at Juntos Somos mais. I've been working with
                    software engineering for over 6 years, currently I'm working
                    on the core team at Juntos Somos mais. I've been working
                    with software engineering for over 6 years, currently I'm
                    working on the core team at Juntos Somos mais.
                  </p>
                  <p>
                    I've been working with software engineering for over 6
                    years, currently I'm working on the core team at Juntos
                    Somos mais. I've been working with software engineering for
                    over 6 years, currently I'm working on the core team at
                    Juntos Somos mais. I've been working with software
                    engineering for over 6 years, currently I'm working on the
                    core team at Juntos Somos mais. I've been working with
                    software engineering for over 6 years, currently I'm working
                    on the core team at Juntos Somos mais.
                  </p>
                </div>
              </div>
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
  const i18n = {
    greeting: {
      greeting: t("greeting.greeting"),
      iam: t("greeting.iam"),
      name: t("greeting.name"),
    },
    menu: {},
    sections: {
      about: {
        title: t("page.sections.about.title"),
        content: {
          about: t("page.sections.about.content.about"),
          aboutCompany: t("page.sections.about.content.about-company"),
          aboutExperience: t("page.sections.about.content.about-experience"),
          aboutTechnologies: t(
            "page.sections.about.content.about-technologies"
          ),
        },
        actions: {
          buttons: {
            resume: t("page.sections.about.actions.buttons.resume"),
            blog: t("page.sections.about.actions.buttons.blog"),
          },
        },
      },
      experiences: t("page.sections.experiences"),
      projects: t("page.sections.projects"),
    },
  };

  return {
    props: {
      i18n,
    },
  };
}
