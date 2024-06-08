import { mediaQuery } from "@/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  nav: style({
    height: "70px",
    backgroundColor: "aquamarine",
  }),

  links: style({
    "@media": {
      [mediaQuery.sp]: {
        display: "none",
      },
    },
  }),

  link: style({
    margin: "10px",
    textDecoration: "none",
  }),

  sitemap: style({
    display: "none",

    "@media": {
      [mediaQuery.sp]: {
        display: "inline-block",
      },
    },
  }),
}
