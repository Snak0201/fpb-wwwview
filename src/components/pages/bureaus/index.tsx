import { bureausAtom } from "@/store/bureaus"
import { useAtomValue } from "jotai"
import { styles } from "@/components/pages/bureaus/style.css"
import { useGetBureauQuery, useGetBureausQuery } from "@/graphql/generated"

export const BureausPageComponent = () => {
  const bureaus = useAtomValue(bureausAtom)

  const [csrBureau, csrQuery] = useGetBureauQuery()
  const getBureau = () => {
    csrQuery({ url: "http://localhost:8000/graphql" })
  }

  console.log(csrBureau)

  return (
    <>
      <header className={styles.header}>ほしのなか政府</header>
      {bureaus.map((bureau, i) => (
        <div key={i}>{bureau.name}</div>
      ))}
      <button onClick={getBureau}>局取得</button>
    </>
  )
}
