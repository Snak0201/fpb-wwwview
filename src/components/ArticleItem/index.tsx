import { ArticleItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleItemFragment
}

export const ArticleItem = ({ article }: Props) => {
  return <div>{article.title}</div>
}
