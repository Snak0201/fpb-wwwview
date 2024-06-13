import { ReactNode } from "react"

interface Props {
  href: string
  children: ReactNode
}

export const ViewLink = ({ href, children }: Props) => {
  return <a href={href}>{children}</a>
}
