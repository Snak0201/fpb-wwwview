import { styles } from "@/components/ViewContainer/style.css"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

/**
 * View共通の画面サイズの制御コンポーネント
 */
export const ViewContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}
