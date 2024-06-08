import { ViewFooter } from "@/components/ViewFooter"
import { ViewHeader } from "@/components/ViewHeader"
import { styles } from "@/layouts/style.css"
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
      <div className={styles.viewUpperContent}>
        <header>
          <ViewHeader />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <ViewFooter />
      </footer>
    </>
  )
}
