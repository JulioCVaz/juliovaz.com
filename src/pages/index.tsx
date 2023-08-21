import {
  GetStaticPropsContext,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
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

import { Menu } from "../components/Menu";

import styles from "./index.module.scss";

const Home = ({ context }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { locale, locales, defaultLocale } = context;
  console.log({
    locale,
    locales,
    defaultLocale,
  });
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
            {/* <span>{i18n.sections.about.title}</span> */}
          </div>
          <div className="label">
            {/* <span>{i18n.sections.experiences.title}</span> */}
          </div>
          <div className="label">
            {/* <span>{i18n.sections.projects.title}</span> */}
          </div>
        </div>
        <div className={styles["page-nav"]}>
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
              {/* <Menu translations={i18n.menu} /> */}
            </div>
          </header>

          <section id="home" className={styles.home}>
            <div className={styles.description}>
              <h1 className={styles["description-greeting"]}>
                {/* <strong>{i18n.greeting.greeting}</strong>, {i18n.greeting.iam}{" "} */}
                {/* <strong>{i18n.greeting.name}</strong> */}
              </h1>
              <p className={styles["description-carrer"]}>
                {/* {i18n.sections.about.content.about}{" "} */}
                <Link
                  href="https://juntossomosmais.com.br"
                  target="_blank"
                  about="juntos somos mais - fidelizacao"
                >
                  {/* {i18n.sections.about.content.aboutCompany} */}
                </Link>{" "}
                {/* {i18n.sections.about.content.aboutExperience} */}
              </p>
              <p className={styles["description-technologies"]}>
                {/* {i18n.sections.about.content.aboutTechnologies}{" "} */}
                <span className={styles["description-technology"]}>nextjs</span>
              </p>
              <div className={styles["home-links"]}>
                <Button
                  type="outline"
                  link="https://drive.google.com/file/d/18VNj8VmHDra18t2XIfd9N1-4IkgSG33P/view?usp=sharing"
                >
                  {/* {i18n.sections.about.actions.buttons.resume} */}
                </Button>
                <Button link="#">
                  {/* {i18n.sections.about.actions.buttons.blog} */}
                </Button>
              </div>
            </div>
          </section>
          <section id="experiences" className={styles["experiences-id"]}>
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
                    <ul>
                      <li>
                        {/*{
                          i18n.sections.experiences.content.timeline.current
                            .about
                        }{" "} */}
                        <Link
                          href="https://www.juntossomosmais.com.br/home/profissional-de-obra"
                          target="_blank"
                        >
                          {/* {
                            i18n.sections.experiences.content.timeline.current
                              .links.website
                          } */}
                        </Link>{" "}
                        {/* {
                          i18n.sections.experiences.content.timeline.current
                            .conector
                        }{" "} */}
                        <Link
                          href="https://play.google.com/store/apps/details?id=br.com.votorantim.votorantim.jsmpro"
                          target="_blank"
                        >
                          {/* {
                            i18n.sections.experiences.content.timeline.current
                              .links.mobile
                          } */}
                        </Link>
                        {/* {
                          i18n.sections.experiences.content.timeline.current
                            .aboutExperience
                        }{" "} */}
                        <Link
                          href="https://github.com/oracle/pushiomanager-react-native"
                          target="_blank"
                        >
                          @oracle
                        </Link>{" "}
                        {/* {
                          i18n.sections.experiences.content.timeline.current
                            .aboutNotification
                        } */}
                      </li>
                    </ul>
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
                    <ul>
                      <li>
                        {/* {i18n.sections.experiences.content.timeline.prev.about}{" "} */}
                        <Link
                          href="https://play.google.com/store/apps/details?id=com.looqbox.app"
                          target="_blank"
                        >
                          Looqbox app
                        </Link>
                        {/* {
                          i18n.sections.experiences.content.timeline.prev
                            .aboutExperience
                        } */}
                      </li>
                    </ul>
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
                    <ul>
                      <li>
                        {/* {i18n.sections.experiences.content.timeline.last.about}{" "} */}
                        <Link
                          href="https://physicaltest.com.br/"
                          target="_blank"
                        >
                          Physical Test
                        </Link>{" "}
                        {/* {
                          i18n.sections.experiences.content.timeline.last
                            .aboutExperience
                        } */}
                      </li>
                    </ul>
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
                  {/* <p>{i18n.sections.projects.content.first}</p> */}
                  {/* <p>{i18n.sections.projects.content.second}</p> */}
                  <br />
                  {/* <p>{i18n.sections.projects.content.third}</p> */}
                  <br />
                  {/* <p>{i18n.sections.projects.content.fourth}</p> */}
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className={styles.projects}></section>
        </div>
      </div>
    </>
  );
};

export default Home;

// https://github.com/aralroca/next-translate#loadnamespaces
// https://github.com/aralroca/next-translate/blob/ba63f4dcdb65ed258185b2851a4574a2feeb2ebb/examples/without-loader/pages/index.js#L23
export const getStaticProps: GetStaticProps = (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      context,
    },
  };

  // const t = await getT(locale, "common");
  // const i18n = {
  //   greeting: {
  //     greeting: t("greeting.greeting"),
  //     iam: t("greeting.iam"),
  //     name: t("greeting.name"),
  //   },
  //   menu: {
  //     about: t("page.menu.about"),
  //     experiences: t("page.menu.experiences"),
  //     projects: t("page.menu.projects"),
  //     blog: t("page.menu.blog"),
  //     resume: t("page.menu.resume"),
  //   },
  //   sections: {
  //     about: {
  //       title: t("page.sections.about.title"),
  //       content: {
  //         about: t("page.sections.about.content.about"),
  //         aboutCompany: t("page.sections.about.content.about-company"),
  //         aboutExperience: t("page.sections.about.content.about-experience"),
  //         aboutTechnologies: t(
  //           "page.sections.about.content.about-technologies"
  //         ),
  //       },
  //       actions: {
  //         buttons: {
  //           resume: t("page.sections.about.actions.buttons.resume"),
  //           blog: t("page.sections.about.actions.buttons.blog"),
  //         },
  //       },
  //     },
  //     experiences: {
  //       title: t("page.sections.experiences.title"),
  //       content: {
  //         timeline: {
  //           current: {
  //             about: t(
  //               "page.sections.experiences.content.timeline.current.about"
  //             ),
  //             aboutExperience: t(
  //               "page.sections.experiences.content.timeline.current.about-experience"
  //             ),
  //             aboutNotification: t(
  //               "page.sections.experiences.content.timeline.current.about-notification"
  //             ),
  //             conector: t(
  //               "page.sections.experiences.content.timeline.current.conector"
  //             ),
  //             links: {
  //               website: t(
  //                 "page.sections.experiences.content.timeline.current.links.website"
  //               ),
  //               mobile: t(
  //                 "page.sections.experiences.content.timeline.current.links.mobile"
  //               ),
  //             },
  //           },
  //           prev: {
  //             about: t("page.sections.experiences.content.timeline.prev.about"),
  //             aboutExperience: t(
  //               "page.sections.experiences.content.timeline.prev.about-experience"
  //             ),
  //           },
  //           last: {
  //             about: t("page.sections.experiences.content.timeline.last.about"),
  //             aboutExperience: t(
  //               "page.sections.experiences.content.timeline.last.about-experience"
  //             ),
  //           },
  //         },
  //       },
  //     },
  //     projects: {
  //       title: t("page.sections.projects.title"),
  //       content: {
  //         first: t("page.sections.projects.content.first"),
  //         second: t("page.sections.projects.content.second"),
  //         third: t("page.sections.projects.content.third"),
  //         fourth: t("page.sections.projects.content.fourth"),
  //       },
  //     },
  //   },
  // };
  // return {
  //   props: {
  //     i18n,
  //   },
  // };
};
