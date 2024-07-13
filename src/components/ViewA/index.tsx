import { ReactNode } from "react"

interface Props {
  href: string
  className?: string
  isOpenNewTab?: boolean
  children: ReactNode
}

/**
 * View共通でつかうaタグ
 *
 * 新しいタブを指定する場合、isOpenNewTabをtrueに設定する
 */
export const ViewA = ({
  href,
  className = "",
  isOpenNewTab = false,
  children,
}: Props) => {
  if (!isOpenNewTab)
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
