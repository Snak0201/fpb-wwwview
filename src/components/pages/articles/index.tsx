import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesBaseAtom } from "@/store/articles"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        {articlesBase.nodes &&
          articlesBase.nodes.map((article) => {
            return <>{article?.id}</>
          })}
      </ViewContainer>
    </ViewLayout>
  )
}
