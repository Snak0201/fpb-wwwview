import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const ViewLayout = ({ children }: Props) => {
  return (
    <>
      <header>ここがheader</header>
      <main>{children}</main>
      <footer>ここがfooter</footer>
    </>
  )
}
