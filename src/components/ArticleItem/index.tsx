import { styles } from "@/components/ArticleItem/styles.css"
import { ArticleItemFragment, Bureau } from "@/graphql/generated"

interface Props {
  article: ArticleItemFragment
}

/**
 * 記事一覧の一行
 */
export const ArticleItem = ({ article }: Props) => {
  return (
    <div className={styles.card}>
      <div className="title">{article.title}</div>
      <div className="bureaus">
        {article.bureaus?.map((bureau) => bureau.name)}
      </div>
    </div>
  )
}
