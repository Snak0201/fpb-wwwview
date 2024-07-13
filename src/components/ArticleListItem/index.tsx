import { styles } from "@/components/ArticleListItem/style.css"
import { ViewA } from "@/components/ViewA"
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
      <ViewA
        href={`articles/${article.id}`}
        className={styles.title}
        opensInNewTab={true}
      >
        {article.title}
      </ViewA>

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
    </div>
  )
}
