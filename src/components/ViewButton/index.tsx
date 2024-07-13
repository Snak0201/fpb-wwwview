import { styles } from "@/components/ViewButton/style.css"
import { ReactNode } from "react"

interface Props {
  onClick?: () => void
  className?: string
  isHolizontal?: boolean
  children: ReactNode
}

/**
 * View共通のbuttonタグ
 */
export const ViewButton = ({
  onClick,
  className = "",
  isHolizontal = false,
  children,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.normal} ${
        isHolizontal ? "holizontal" : ""
      }`}
    >
      {children}
    </button>
  )
}
