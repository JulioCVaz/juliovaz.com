import { memo } from 'react'

import { LucideProps } from 'lucide-react'
import { Github, Linkedin, Newspaper, Twitter } from 'lucide-react'

const SelectedIcon = {
  'github': Github,
  'linkedin': Linkedin,
  'newspaper': Newspaper,
  'twitter': Twitter,
} as const

type selectIcon = keyof typeof SelectedIcon

type LucideIconProps = {
  name: selectIcon,
} & LucideProps

// @note: waiting stable version to lucide dynamic icon imports https://lucide.dev/guide/packages/lucide-react#with-dynamic-imports
export const Icon = memo(({ name, ...props}: LucideIconProps) => {
  
  const Component = SelectedIcon[name as LucideIconProps['name']]

  return <Component {...props}/>
})

Icon.displayName = 'Icon'

export default Icon