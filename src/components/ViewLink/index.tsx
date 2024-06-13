type Props = {
  href: string
  text: string
}

export const ViewLink = ({ href, text }: Props) => {
  return <a href={href}>{text}</a>
}
