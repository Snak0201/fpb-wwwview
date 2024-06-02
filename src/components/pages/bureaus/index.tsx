import { bureausAtom } from "@/store/bureaus"
import { useAtomValue } from "jotai"

export const BureausPageComponent = () => {
  const bureaus = useAtomValue(bureausAtom)

  return (
    <>
      {bureaus.map((bureau, i) => (
        <div key={i}>{bureau.name}</div>
      ))}
    </>
  )
}
