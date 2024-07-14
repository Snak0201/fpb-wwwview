import { initUrqlClient } from "next-urql"
import { cacheExchange, fetchExchange, ssrExchange } from "urql"

/**
 * CSR時に指定するオプション
 */
export const csrOptions = {
  url: `${process.env.NEXT_PUBLIC_WWWSITE_ROOT}graphql`,
}

/**
 * SSR時のクライアントを作成する
 */
export const ssrClient = () => {
  const ssrCache = ssrExchange({ isClient: false })
  const client = initUrqlClient(
    {
      url: `${process.env.NEXT_PUBLIC_WWWSITE_CONTAINER_ROOT}graphql`,
      exchanges: [cacheExchange, ssrCache, fetchExchange],
    },
    false
  )

  return { ssrCache: ssrCache, client: client }
}
