import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesBaseAtom } from "@/store/articles"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        <ul>
          {articlesBase.nodes?.map((article, index) => {
            return <li key={index}>{article?.title}</li>
          })}
        </ul>
      </ViewContainer>
    </ViewLayout>
  )
}
