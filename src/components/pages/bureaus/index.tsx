import { bureausAtom } from "@/store/bureaus"
import { useAtomValue } from "jotai"
import { bureausStyle } from "./style.css"

export const BureausPageComponent = () => {
  const bureaus = useAtomValue(bureausAtom)

  return (
    <>
      <header className={bureausStyle.header}>ほしのなか政府</header>
      {bureaus.map((bureau, i) => (
        <div key={i}>{bureau.name}</div>
      ))}
    </>
  )
}
