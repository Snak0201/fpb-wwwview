import { styles } from "@/components/ViewFooter/style.css"

/**
 * View共通で使うフッター
 */
export const ViewFooter = () => {
  return (
    <div className={styles.footer}>
      <a href="about" className={styles.link}>
        ほしのなか政府 Hoshinonaka Government
      </a>
    </div>
  )
}
