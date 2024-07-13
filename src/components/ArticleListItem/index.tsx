import { styles } from "@/components/ArticleListItem/style.css"
import { ArticleListItemFragment } from "@/graphql/generated"

interface Props {
  article: ArticleListItemFragment
}

/**
 * 記事一覧内の一アイテム
 */
export const ArticleListItem = ({ article }: Props) => {
  /**
   * タイムゾーン付きの日時文字列を変換する
   *
   * 2024-06-16T13:36:09+09:00 => 2024年06月16日 13時36分
   *  */
  const formattedPublishedAt = (datetimezoneString: string) => {
    const dateString = datetimezoneString.split("T")[0]
    const [yearString, monthString, dayString] = dateString.split("-")
    const [hourString, minuteString] = datetimezoneString
      .split("T")[1]
      .split("+")[0]
      .split(":")
    return `${yearString}年${monthString}月${dayString}日 ${hourString}時${minuteString}分`
  }

  return (
    <div className={styles.card}>
      <a
        className={styles.title}
        href={`articles/${article.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {article.title}
      </a>

      {!!article.publishedAt && (
        <div>
          <span className={styles.description}>公開日時:</span>
          {formattedPublishedAt(article.publishedAt)}
        </div>
      )}

      {!!article.bureaus?.length && (
        <div>
          <span className={styles.description}>管轄局:</span>
          {article.bureaus.map((bureau, index) => (
            <a
              className={styles.bureau}
              href={`bureaus/${bureau.slug}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {bureau.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
