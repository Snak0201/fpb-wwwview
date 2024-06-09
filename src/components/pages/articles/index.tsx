import { articlesBaseAtom } from "@/store/articles"
import { useAtomValue } from "jotai"

export const ArticlesPageComponent = () => {
  const articlesBase = useAtomValue(articlesBaseAtom)
  console.log(articlesBase)
  return <>Articles</>
}
