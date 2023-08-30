import Link from 'next/link'
import { Icon } from '@uikit/Icon'

const socialLinks = [
  {
    link: "https://github.com/JulioCVaz",
    icon: "github"
  },
  {
    link: "https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-vaz-560ab4127/",
    icon: "linkedin"
  },
  {
    link: "https://dev.to/juliovaz",
    icon: "newspaper"
  },
  {
    link: "https://twitter.com/juliovazbr",
    icon: "twitter"
  }
] as const

export const Header = () => {

    return (
      <>
      {
        socialLinks.map(({ icon, link }, index) => {
          return (
            <Link key={index.toString()} href={link}>
              <Icon name="github" />
            </Link>
          )
          }
        )
      }
      </>
    )
}

{/* <header className={styles.header}>
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
              
            </div>
          </header> */}