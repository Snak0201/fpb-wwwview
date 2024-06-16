import { ArticleItem } from "@/components/ArticleItem"
import { ViewContainer } from "@/components/ViewContainer"
import { useGetArticlesQuery } from "@/graphql/generated"
import { ViewLayout } from "@/layouts"
import { articlesBaseAtom } from "@/store/articles"
import { csrOptions } from "@/utils/constants/csrOptions"
import { useAtomValue } from "jotai"
import { after } from "node:test"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)
  const articles = articlesBase.nodes

  const [csrArticles, csrQuery] = useGetArticlesQuery({
    variables: { first: 10, after: articlesBase.pageInfo.endCursor },
    pause: true,
  })

  const nextArticles = () => {
    csrQuery(csrOptions)
  }

  console.log(csrArticles)

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        <h1>記事一覧</h1>
        {articles?.map((article) => {
          if (!article) return
          return <ArticleItem key={article.id} article={article} />
        })}
      </ViewContainer>
      {articlesBase.pageInfo.hasPreviousPage && <>前へ</>}
      {articlesBase.pageInfo.hasNextPage && (
        <button onClick={nextArticles}>次へ</button>
      )}
    </ViewLayout>
  )
}
