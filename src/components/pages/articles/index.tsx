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

  const [csrArticles, csrQuery] = useGetArticlesPageQuery({
    variables: {
      endCursor: articles.pageInfo.endCursor,
    },
    pause: true,
  })

  const getArticles = () => {
    csrQuery(csrOptions)
  }

  useEffect(() => {
    if (!csrArticles.data?.articles) return

    setArticles(csrArticles.data?.articles)
  }, [csrArticles.data?.articles])

  if (!articles) return

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        <h1>記事一覧</h1>
        {articles.nodes?.map((article, index) => {
          if (!article) return
          return <ArticleListItem article={article} key={index} />
        })}
        {articles.pageInfo.hasNextPage && (
          <button onClick={getArticles}>次へ</button>
        )}
      </ViewContainer>
    </ViewLayout>
  )
}
