import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function TypographyP({ children }: Props) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}
