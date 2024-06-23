import { BureausFragment } from "@/graphql/generated"
import { atom } from "jotai"

export const emptyBureaus: BureausFragment[] = [
  {
    id: "",
    name: "",
    description: "",
  },
]

export const bureausAtom = atom<BureausFragment[]>(emptyBureaus)
