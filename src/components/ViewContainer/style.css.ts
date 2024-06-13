import { mediaQuery } from "@/utils/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  container: style({
    maxWidth: "1024px",
    margin: "0 auto",
    "@media": {
      [mediaQuery.tab]: {
        width: "95%",
      },
    },
  }),
}
