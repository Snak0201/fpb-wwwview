import { ArticleItem } from "@/components/ArticleItem"
import { ViewContainer } from "@/components/ViewContainer"
import { ViewLayout } from "@/layouts"
import { articlesBaseAtom } from "@/store/articles"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)
  const article = articlesBase.nodes?.[0]

  return (
    <ViewLayout title="記事一覧">
      <ViewContainer>
        {article && <ArticleItem article={article} />}
      </ViewContainer>
    </ViewLayout>
  )
}
