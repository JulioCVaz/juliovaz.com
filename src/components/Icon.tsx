import dynamic from 'next/dynamic'

import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

export const Icon = ({ name, ...props }: IconProps) => {
  const DynamicIcon = dynamic(dynamicIconImports[name])

  return <DynamicIcon {...props} />
}