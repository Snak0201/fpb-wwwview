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
        {articles?.map((article) => {
          if (!article) return
          return <ArticleItem key={article.id} article={article} />
        })}
      </ViewContainer>
    </ViewLayout>
  )
}
