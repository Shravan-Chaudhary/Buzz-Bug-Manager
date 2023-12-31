import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function TypographyH2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-3xl">
      {children}
    </h2>
  )
}
