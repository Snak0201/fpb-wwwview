import { styles } from "@/components/ArticleListItem/style.css"
import { ArticleListItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleListItemFragment
}

/**
 * 記事一覧内の一アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  return (
    <div className={styles.card}>
      <h2>{article.title}</h2>
      <p>{article.updatedAt}</p>
      <p>{article.publishedAt}</p>
      {article.bureaus?.map((bureau) => (
        <>{bureau.name}</>
      ))}
    </div>
  )
}
