import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesPage = useAtomValue(articlesPageAtom)
  const articles = articlesPage.nodes

  if (!articles) return

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        {articles.map((article, index) => {
          if (!article) return
          return <p key={index}>{article.title}</p>
        })}
      </ViewContainer>
    </ViewLayout>
  )
}
