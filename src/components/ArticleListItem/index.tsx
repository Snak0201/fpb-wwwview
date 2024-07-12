import { styles } from "@/components/ArticleListItem/style.css"
import { ArticleListItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleListItemFragment
}

/**
 * 記事一覧内の一アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  const published = new Date(article.publishedAt)

  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const formattedDate = formatter.format(published)

  return (
    <div className={styles.card}>
      <a href={`articles/${article.id}`}>{article.title}</a>
      {!!formattedDate && <p>{formattedDate}</p>}
      {article.bureaus?.map((bureau) => (
        <>{bureau.name}　</>
      ))}
    </div>
  )
}
