import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesPage = useAtomValue(articlesPageAtom)
  const articles = articlesPage.nodes

  if (!articles) return

  return (
    <>
      {articles.map((article, index) => {
        if (!article) return
        return <p key={index}>{article.title}</p>
      })}
    </>
  )
}
