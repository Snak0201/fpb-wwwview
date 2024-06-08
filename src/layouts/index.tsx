import { ViewHeader } from "@/components/ViewHeader"
import Head from "next/head"
import { ReactNode } from "react"

interface Props {
  title: string
  children: ReactNode
}

/**
 * 全体のレイアウト・Headの調整
 */
export const ViewLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <ViewHeader />
      </header>
      <main>{children}</main>
      <footer>ここがfooter</footer>
    </>
  )
}
