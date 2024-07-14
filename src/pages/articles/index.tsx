import {
  ArticlesPageComponent,
  ARTICLES_PER_PAGE,
} from "@/components/pages/articles"
import { ssrClient } from "@/constants/urql"
import {
  GetArticlesPageDocument,
  useGetArticlesPageQuery,
} from "@/graphql/generated"
import { articlesPageAtom, emptyArticlesPage } from "@/store/article"
import { useHydrateAtoms } from "jotai/utils"
import { GetServerSideProps } from "next"
import { withUrqlClient } from "next-urql"
import { cacheExchange, fetchExchange } from "urql"

interface Props {}

const ArticlesPage = () => {
  const [articles] = useGetArticlesPageQuery({
    variables: {
      first: ARTICLES_PER_PAGE,
    },
  })
  useHydrateAtoms([
    [articlesPageAtom, articles.data?.articles || emptyArticlesPage],
  ])

  return <ArticlesPageComponent />
}

export const getServerSideProps = (async (context) => {
  const { ssrCache, client } = ssrClient()

  try {
    await Promise.all([
      client
        .query(GetArticlesPageDocument, { first: ARTICLES_PER_PAGE })
        .toPromise(),
    ])
  } catch (e) {
    console.log(e)
  }

  if (!ssrCache.extractData()) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
}) satisfies GetServerSideProps<Props>

export default withUrqlClient(
  (ssrExchange) => ({
    url: `${process.env.NEXT_PUBLIC_WWWSITE_CONTAINER_ROOT}graphql`,
    exchanges: [cacheExchange, ssrExchange, fetchExchange],
  }),
  { ssr: false }
)(ArticlesPage)
