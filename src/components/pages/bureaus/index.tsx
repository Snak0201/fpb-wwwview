import { bureausAtom } from "@/store/bureaus"
import { useAtomValue } from "jotai"
import { styles } from "@/components/pages/bureaus/style.css"
import { useGetBureauQuery } from "@/graphql/generated"
import { csrOptions } from "@/constants/urql"
import { ViewA } from "@/components/ViewA"

/**
 * 局一覧ページ
 * （開発用ページ）
 */
export const BureausPageComponent = () => {
  const bureaus = useAtomValue(bureausAtom)

  const [csrBureau, csrQuery] = useGetBureauQuery({ pause: true })

  const getBureau = () => {
    csrQuery(csrOptions)
  }

  return (
    <>
      <header className={styles.header}>ほしのなか政府</header>
      {bureaus.map((bureau, i) => (
        <div key={i}>{bureau.name}</div>
      ))}
      <button onClick={getBureau}>局取得</button>
      <ViewA href="/">トップ</ViewA>
    </>
  )
}
