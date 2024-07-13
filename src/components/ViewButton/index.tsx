import { ReactNode } from "react"

interface Props {
  onClick?: () => void
  className?: string
  children: ReactNode
}

/**
 * View共通のbuttonタグ
 */
export const ViewButton = ({ onClick, className, children }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
