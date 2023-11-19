import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function TypographyLead({ children }: Props) {
  return <p className=" text-sm text-muted-foreground md:text-base">{children}</p>
}
