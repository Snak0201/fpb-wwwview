import { mediaQuery } from "@/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const ViewContainerStyles = {
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
