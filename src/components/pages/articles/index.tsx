import { ArticleItem } from "@/components/ArticleItem"
import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesBaseAtom } from "@/store/articles"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)
  const articles = articlesBase.nodes

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
      {articlesBase.pageInfo.hasNextPage && <>次へ</>}
    </ViewLayout>
  )
}
