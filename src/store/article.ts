import { ArticlesPageFragment } from "@/graphql/generated"
import { atom } from "jotai"

export const emptyArticlesPage: ArticlesPageFragment = {
  pageInfo: {
    hasNextPage: false,
  },
}

export const articlesPageAtom = atom<ArticlesPageFragment>(emptyArticlesPage)
