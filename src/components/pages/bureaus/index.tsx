import { bureausAtom } from "@/store/bureaus"
import { useAtomValue } from "jotai"
import { styles } from "@/components/pages/bureaus/style.css"

export const BureausPageComponent = () => {
  const bureaus = useAtomValue(bureausAtom)

  return (
    <>
      <header className={styles.header}>ほしのなか政府</header>
      {bureaus.map((bureau, i) => (
        <div key={i}>{bureau.name}</div>
      ))}
    </>
  )
}
