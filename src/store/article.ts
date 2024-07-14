import { ArticlesPageFragment } from "@/graphql/generated"
import { atom } from "jotai"

export const emptyArticlesPage: ArticlesPageFragment = {
  pageInfo: {
    hasPreviousPage: false,
    hasNextPage: false,
  },
}

export const articlesPageAtom = atom<ArticlesPageFragment>(emptyArticlesPage)
