import { mediaQuery } from "@/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  card: style({
    margin: "20px 5px",
    padding: "5px",
    boxShadow: " 0 10px 25px 0 rgba(0, 0, 0, .15)",
  }),
  title: style({
    fontSize: "24px",
    textDecoration: "none",
    "@media": {
      [mediaQuery.tab]: {
        fontSize: "18px",
      },
    },
  }),
  description: style({ marginRight: "5px" }),
  bureau: style({ textDecoration: "none", marginRight: "5px" }),
  committee: style({ textDecoration: "none", marginRight: "5px" }),
}
