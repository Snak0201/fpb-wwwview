import { styles } from "@/components/ViewHeader/style.css"

/**
 * ヘッダー
 */
export const ViewHeader = () => {
  return (
    <div className={styles.links}>
      <a href="articles">記事一覧</a>
      <a href="tools">ツール</a>
      <a href="about">ほしのなか政府について</a>
    </div>
  )
}
