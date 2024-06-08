import { mediaQuery } from "@/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  nav: style({
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "aquamarine",
    "@media": { [mediaQuery.sp]: { height: "56px" } },
  }),

  links: style({
    marginLeft: "30px",
    "@media": {
      [mediaQuery.sp]: {
        display: "none",
      },
    },
  }),

  link: style({
    margin: "15px",
    textDecoration: "none",
  }),

  sitemap: style({
    display: "none",

    "@media": {
      [mediaQuery.sp]: {
        marginLeft: "15px",
        display: "inline-block",
      },
    },
  }),

  logo: style({
    "@media": {
      [mediaQuery.sp]: {
        height: "56px",
        width: "160px",
      },
    },
  }),
}
