import { ArticleListItem } from "@/components/ArticleListItem"
import { ViewContainer } from "@/components/ViewContainer"
import { csrOptions } from "@/constants/urql"
import { useGetArticlesPageQuery } from "@/graphql/generated"
import { ViewLayout } from "@/layouts"
import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"
import { useEffect, useState } from "react"

export const ArticlesPageComponent = () => {
  const ssrArticles = useAtomValue(articlesPageAtom)

  const [articles, setArticles] = useState(ssrArticles)

  const [csrNextArticles, csrNextQuery] = useGetArticlesPageQuery({
    variables: {
      endCursor: articles.pageInfo.endCursor,
    },
    pause: true,
  })

  const [csrPreviousArticles, csrPrivousQuery] = useGetArticlesPageQuery({
    variables: {
      endCursor: articles.pageInfo.startCursor,
    },
    pause: true,
  })

  const getPreviousArticles = () => {
    csrPrivousQuery(csrOptions)
  }

  const getNextArticles = () => {
    csrNextQuery(csrOptions)
  }

  useEffect(() => {
    if (!csrPreviousArticles.data?.articles) return

    setArticles(csrPreviousArticles.data?.articles)
  }, [csrPreviousArticles.data?.articles])

  useEffect(() => {
    if (!csrNextArticles.data?.articles) return

    setArticles(csrNextArticles.data?.articles)
  }, [csrNextArticles.data?.articles])

  if (!articles) return

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        <h1>記事一覧</h1>
        {articles.nodes?.map((article, index) => {
          if (!article) return
          return <ArticleListItem article={article} key={index} />
        })}
        {articles.pageInfo.hasPreviousPage && (
          <button onClick={getPreviousArticles}>前へ</button>
        )}
        {articles.pageInfo.hasNextPage && (
          <button onClick={getNextArticles}>次へ</button>
        )}
      </ViewContainer>
    </ViewLayout>
  )
}
