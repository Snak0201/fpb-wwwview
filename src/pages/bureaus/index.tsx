import { BureausPageComponent } from "@/components/pages/bureaus"
import { ssrClient } from "@/constants/urql"
import { GetBureausDocument, useGetBureausQuery } from "@/graphql/generated"
import { bureausAtom, emptyBureaus } from "@/store/bureaus"
import { useHydrateAtoms } from "jotai/utils"
import { GetServerSideProps } from "next"
import { initUrqlClient, withUrqlClient } from "next-urql"
import { cacheExchange, fetchExchange, ssrExchange } from "urql"

interface Props {}

const BureausPage = () => {
  const [bureaus] = useGetBureausQuery()
  useHydrateAtoms([[bureausAtom, bureaus.data?.bureaus || emptyBureaus]])

  return <BureausPageComponent />
}

export const getServerSideProps = (async (context) => {
  const { ssrCache, client } = ssrClient()

  try {
    await Promise.all([client.query(GetBureausDocument, {}).toPromise()])
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
)(BureausPage)
