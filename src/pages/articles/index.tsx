import { ArticlesPageComponent } from "@/components/pages/articles"
import { ssrClient } from "@/constants/urql"
import { GetServerSideProps } from "next"
import { initUrqlClient, withUrqlClient } from "next-urql"
import { cacheExchange, fetchExchange, ssrExchange } from "urql"

interface Props {}

const ArticlesPage = () => {
  // const [bureaus] = useGetBureausQuery()
  // useHydrateAtoms([[bureausAtom, bureaus.data?.bureaus || emptyBureaus]])

  return <ArticlesPageComponent />
}

export const getServerSideProps = (async (context) => {
  const { ssrCache, client } = ssrClient()
  // const ssrCache = ssrExchange({ isClient: false })
  // const client = initUrqlClient(
  //   {
  //     url: `${process.env.NEXT_PUBLIC_WWWSITE_CONTAINER_ROOT}graphql`,
  //     exchanges: [cacheExchange, ssrCache, fetchExchange],
  //   },
  //   false
  // )

  // try {
  //   await Promise.all([client.query(GetBureausDocument, {}).toPromise()])
  // } catch (e) {
  //   console.log(e)
  // }

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
