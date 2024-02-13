import { lazy, Suspense } from "react";
import type { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<i />}>
      <LucideIcon {...props} />
    </Suspense>
  );
}
