import { ArticleList } from "@/components/ArticleList"
import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articles = useAtomValue(articlesPageAtom)

  if (!articles) return

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        <ArticleList articles={articles} />
        {/* {articles.map((article, index) => {
          if (!article) return
          return <p key={index}>{article.title}</p>
        })} */}
      </ViewContainer>
    </ViewLayout>
  )
}
