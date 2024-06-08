import { ReactNode } from "react"
import { ViewContainerStyles } from "./style.css"

interface Props {
  children: ReactNode
}

/**
 * 画面サイズの制御コンポーネント
 */
export const ViewContainer = ({ children }: Props) => {
  return <div className={ViewContainerStyles.container}>{children}</div>
}
