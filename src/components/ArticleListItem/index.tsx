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
      <a href={`articles/${article.id}`}>{article.title}</a>

      {!!article.publishedAt && (
        <p>公開日時: {formattedPublishedAt(article.publishedAt)}</p>
      )}

      {!!article.bureaus?.length && (
        <p>
          管轄局:{" "}
          {article.bureaus.map((bureau, index) => (
            <span key={index}>{bureau.name} </span>
          ))}
        </p>
      )}
    </div>
  )
}
