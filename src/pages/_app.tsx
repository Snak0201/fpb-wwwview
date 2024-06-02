import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { cacheExchange, fetchExchange, Client, Provider } from "urql"

const client = new Client({
  url: `https://hoshinonaka.net/graphql`,
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
