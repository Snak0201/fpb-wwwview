import { ArticlesPageComponent } from "@/components/pages/articles"
import { GetArticlesDocument, useGetArticlesQuery } from "@/graphql/generated"
import { articlesBaseAtom, emptyArticlesBase } from "@/store/articles"
import { useHydrateAtoms } from "jotai/utils"
import { GetServerSideProps } from "next"
import { initUrqlClient, withUrqlClient } from "next-urql"
import { cacheExchange, fetchExchange, ssrExchange } from "urql"

interface Props {}

const ArticlesPage = () => {
  const [articles] = useGetArticlesQuery()
  useHydrateAtoms([
    [articlesBaseAtom, articles.data?.articles || emptyArticlesBase],
  ])
  return <ArticlesPageComponent />
}

export const getServerSideProps = (async (context) => {
  const ssrCache = ssrExchange({ isClient: false })
  const client = initUrqlClient(
    {
      url: `${process.env.GRAPHQL_ENDPOINT}`,
      exchanges: [cacheExchange, ssrCache, fetchExchange],
    },
    false
  )

  try {
    await Promise.all([client.query(GetArticlesDocument, {}).toPromise()])
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
    url: `${process.env.GRAPHQL_ENDPOINT}`,
    exchanges: [cacheExchange, ssrExchange, fetchExchange],
  }),
  { ssr: false }
)(ArticlesPage)
