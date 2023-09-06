import { useState } from 'react'
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

export const SocialLinks = () => (
  <>
  {
    socialLinks.map(({ icon, link }, index) => (
        <Link className="mr-large" key={index.toString()} href={link} target='_blank'>
          <Icon name={icon} color='white' size="32"/>
        </Link>
      )
    )
  }
  </>
)

const menuItems = {
  about: {
    link: "#home",
    label: "About",
  },
  experiences: {
    link: "#experiences",
    label: "Experiences",
  },
  projects: {
    link: "#projects",
    label: "Projects",
  },
  resume: {
    link: "#home",
    label: "Resume",
  },
  blog: {
    link: "#home",
    label: "Blog",
  },
};

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div
        className="h-full w-80 fixed z-1 top-0 right-0 p-large bg-dark overflow-x-hidden hidden data-[menu=true]:block"
        data-menu={menuOpen}
      >
        <Icon className="cursor-pointer mt-0 mr-0 mb-0 ml-auto" name='menu-close' color='white' size='32' onClick={toggleMenu}/>
        <div className="flex flex-col align-center text-white text-medium">
          {Object.entries(menuItems).map(([link, item]) => {
            return (
              <Link className="py-small hover:underline underline-offset-2 decoration-primary" key={link} href={item.link} onClick={toggleMenu}>{item.label}</Link>
            );
          })}
        </div>
      </div>
      <Icon className="cursor-pointer" name='menu' color='white' size="32" onClick={toggleMenu}/>
    </>
  )
}


export const Header = () => {
    return (
      <header className='w-4/5 flex justify-between p-base rounded-lg fixed top-0 bg-dark'>
        <div className='flex align-center flex-wrap'>
          <SocialLinks />
        </div>
        <Menu />
      </header>
    )
}