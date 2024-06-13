import { mediaQuery } from "@/utils/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  logo: style({
    margin: "auto",
    display: "block",
    "@media": {
      [mediaQuery.sp]: {
        width: "300px",
        height: "105px",
      },
    },
  }),
}
