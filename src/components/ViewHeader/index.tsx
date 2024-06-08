import { styles } from "@/components/ViewHeader/style.css"
import Image from "next/image"

interface NavLink {
  href: string
  text: string
}

/**
 * ヘッダー
 */
export const ViewHeader = () => {
  const navLinks: NavLink[] = [
    { href: "articles", text: "記事一覧" },
    { href: "tools", text: "ツール" },
    { href: "about", text: "ほしのなか政府について" },
  ]

  return (
    <nav className={styles.nav}>
      <Image src="/images/logo.png" alt="ロゴ画像" width="200" height="70" />
      <span className={styles.links}>
        {navLinks.map((link, index) => {
          return (
            <a key={index} href={link.href} className={styles.link}>
              {link.text}
            </a>
          )
        })}
      </span>
      <span className={`${styles.link} ${styles.sitemap}`}>
        <a href="links">サイトマップ</a>
      </span>
    </nav>
  )
}
