import { styles } from "@/components/ArticleListItem/style.css"
import { ViewA } from "@/components/ViewA"
import { formatDatetimezone } from "@/constants/format"
import { ArticleListItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleListItemFragment
}

/**
 * 記事一覧内の一アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  const publishedAt = formatDatetimezone(article.publishedAt)
  const updatedAt = formatDatetimezone(article.updatedAt)

  return (
    <div className={styles.card}>
      <ViewA
        href={`articles/${article.id}`}
        className={styles.title}
        opensInNewTab={true}
      >
        {article.title}
      </ViewA>

      {!!article.bureaus?.length && (
        <div>
          <span className={styles.description}>管轄局:</span>
          {article.bureaus.map((bureau, index) => (
            <ViewA
              key={index}
              href={`bureaus/${bureau.slug}`}
              className={styles.bureau}
              opensInNewTab={true}
            >
              {bureau.name}
            </ViewA>
          ))}
        </div>
      )}

      {!!article.committees?.length && (
        <div>
          <span className={styles.description}>管轄委員会:</span>
          {article.committees.map((committee, index) => (
            <ViewA
              key={index}
              href={`committees/${committee.slug}`}
              className={styles.committee}
              opensInNewTab={true}
            >
              {committee.name}
            </ViewA>
          ))}
        </div>
      )}

      {!!publishedAt && (
        <div>
          <span className={styles.description}>公開日時:</span>
          {publishedAt}
        </div>
      )}

      {!!updatedAt && publishedAt !== updatedAt && (
        <div>
          <span className={styles.description}>更新日時:</span>
          {updatedAt}
        </div>
      )}
    </div>
  )
}
