import { styles } from "@/components/ViewHeader/style.css"
import Image from "next/image"
import Link from "next/link"

interface NavLink {
  href: string
  text: string
}

/**
 * View共通で使うヘッダー
 */
export const ViewHeader = () => {
  const navLinks: NavLink[] = [
    { href: "articles", text: "記事一覧" },
    { href: "tools", text: "ツール" },
    { href: "about", text: "ほしのなか政府について" },
  ]

  return (
    <nav className={styles.nav}>
      <Link href="links" className={styles.logoLink}>
        <Image
          src="/images/logo.png"
          alt="ロゴ画像"
          width="200"
          height="70"
          className={styles.logo}
        />
      </Link>
      <span className={styles.links}>
        {navLinks.map((link, index) => {
          return (
            <a key={index} href={link.href} className={styles.link}>
              {link.text}
            </a>
          )
        })}
      </span>
      <span className={styles.sitemap}>
        <a href="links" className={styles.link}>
          サイトマップ
        </a>
      </span>
    </nav>
  )
}
