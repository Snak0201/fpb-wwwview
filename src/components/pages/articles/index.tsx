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
        <h1>記事一覧</h1>
        {articles.nodes?.map((article, index) => {
          if (!article) return
          return (
            <div key={index}>
              <p>{article.title}</p>
              <p>{article.updatedAt}</p>
              <p>{article.publishedAt}</p>
              {article.bureaus?.map((bureau) => (
                <>{bureau.name}</>
              ))}
            </div>
          )
        })}
      </ViewContainer>
    </ViewLayout>
  )
}
