import { styles } from "@/components/ArticleItem/styles.css"
import { ArticleItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleItemFragment
}

export const ArticleItem = ({ article }: Props) => {
  return <div className={styles.card}>{article.title}</div>
}
