import { ArticleListFragment } from "@/graphql/generated"

interface Props {
  articles: ArticleListFragment
}

export const ArticleList = ({ articles }: Props) => {
  return <>ArticleList</>
}
