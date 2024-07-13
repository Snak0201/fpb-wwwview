import { ArticleListItem } from "@/components/ArticleListItem"
import { ViewButton } from "@/components/ViewButton"
import { ViewContainer } from "@/components/ViewContainer"
import { csrOptions } from "@/constants/urql"
import { useGetArticlesPageQuery } from "@/graphql/generated"
import { ViewLayout } from "@/layouts"
import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"
import { useEffect, useState } from "react"

export const PAGINATE_ARTICLES_PER = 10

export const ArticlesPageComponent = () => {
  const ssrArticles = useAtomValue(articlesPageAtom)

  const [articles, setArticles] = useState(ssrArticles)

  const [csrNextArticles, csrNextQuery] = useGetArticlesPageQuery({
    variables: {
      first: PAGINATE_ARTICLES_PER,
      endCursor: articles.pageInfo.endCursor,
    },
    /**
     * NOTE: ページネーションの「戻って進む」動作のとき
     * キャッシュが効いてクエリが動かないため、
     * キャッシュを使いつつクエリも飛ばすようにしている
     */
    requestPolicy: "cache-and-network",
    pause: true,
  })

  const getNextArticles = () => {
    csrNextQuery(csrOptions)
  }

  useEffect(() => {
    if (!csrNextArticles.data?.articles) return

    setArticles(csrNextArticles.data?.articles)
  }, [csrNextArticles.data?.articles])

  const [csrPreviousArticles, csrPrivousQuery] = useGetArticlesPageQuery({
    variables: {
      last: PAGINATE_ARTICLES_PER,
      startCursor: articles.pageInfo.startCursor,
    },
    requestPolicy: "cache-and-network",
    pause: true,
  })

  const getPreviousArticles = () => {
    csrPrivousQuery(csrOptions)
  }

  useEffect(() => {
    if (!csrPreviousArticles.data?.articles) return

    setArticles(csrPreviousArticles.data?.articles)
  }, [csrPreviousArticles.data?.articles])

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
          <ViewButton onClick={getPreviousArticles}>前へ</ViewButton>
        )}
        {articles.pageInfo.hasNextPage && (
          <ViewButton onClick={getNextArticles}>次へ</ViewButton>
        )}
      </ViewContainer>
    </ViewLayout>
  )
}
