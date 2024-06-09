import { ArticlesBaseFragment } from "@/graphql/generated"
import { atom } from "jotai"

export const emptyArticlesBase: ArticlesBaseFragment = {
  nodes: [{ id: "", title: "" }],
  pageInfo: {
    endCursor: "",
    hasNextPage: false,
  },
}

export const articlesBaseAtom = atom<ArticlesBaseFragment>(emptyArticlesBase)
