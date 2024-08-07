import { ReactNode } from "react"

interface Props {
  href: string
  className?: string
  opensInNewTab?: boolean
  children: ReactNode
}

/**
 * View共通でつかうaタグ
 *
 * 新しいタブを指定する場合、opensInNewTabをtrueに設定する
 */
export const ViewA = ({
  href,
  className = "",
  opensInNewTab = false,
  children,
}: Props) => {
  if (!opensInNewTab)
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
