import { styles } from "@/components/ArticleItem/styles.css"
import { ArticleItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleItemFragment
}

export const ArticleItem = ({ article }: Props) => {
  return (
    <div className={styles.card}>
      <div className="title">{article.title}</div>
      <div className="bureaus">{article.bureaus?.[0].name}</div>
    </div>
  )
}
