import { color } from "@/constants/color"
import { mediaQuery } from "@/constants/mediaQuery"
import { style } from "@vanilla-extract/css"

export const styles = {
  normal: style({
    textAlign: "center",
    textDecoration: "none",
    marginRight: "auto",
    padding: "1rem 4rem",
    fontWeight: "bold",
    fontSize: "20px",
    border: `2px solid ${color.blue}`,
    color: color.white,
    backgroundColor: color.blue,
    borderRadius: "100vh",
    transition: "0.5s",
    display: "block",

    ":hover": {
      color: color.blue,
      backgroundColor: color.white,
    },
    "@media": {
      [mediaQuery.tab]: {
        padding: "1rem 2.5rem",
      },
    },
    selectors: {
      "&.holizontal": {
        display: "inline",
        marginRight: "10px",
      },
    },
  }),

  danger: style({
    textAlign: "center",
    textDecoration: "none",
    marginRight: "auto",
    padding: "1rem 4rem",
    fontWeight: "bold",
    fontSize: "20px",
    border: `2px solid ${color.alertRed}`,
    color: color.white,
    backgroundColor: color.alertRed,
    borderRadius: "100vh",
    transition: "0.5s",
    display: "block",
    ":hover": {
      color: color.alertRed,
      backgroundColor: color.white,
    },
    selectors: {
      "&.holizontal": {
        display: "inline",
        marginRight: "10px",
      },
    },
  }),
}
