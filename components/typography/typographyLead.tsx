import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function TypographyLead({ children }: Props) {
  return <p className=" text-sm md:text-base text-muted-foreground">{children}</p>
}
