import { BureausFragment } from "@/graphql/generated"
import { atom } from "jotai"

export const emptyBureaus: BureausFragment[] = [
  {
    id: "",
    name: "",
  },
]

export const bureausAtom = atom<BureausFragment[]>(emptyBureaus)
