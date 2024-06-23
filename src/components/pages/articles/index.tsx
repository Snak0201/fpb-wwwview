import { articlesPageAtom } from "@/store/article"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesPage = useAtomValue(articlesPageAtom)
  console.log(articlesPage)

  return <>ArticlesPageComponent</>
}
