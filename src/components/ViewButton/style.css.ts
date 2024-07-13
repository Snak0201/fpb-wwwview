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
    border: "2px solid #4E5BA8",
    color: "#FFFFFF",
    backgroundColor: "#4E5BA8",
    borderRadius: "100vh",
    transition: "0.5s",
    display: "block",

    ":hover": {
      color: "#4E5BA8",
      backgroundColor: "#FFFFFF",
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
    border: "2px solid #F05A5A",
    color: "#FFFFFF",
    backgroundColor: "#F05A5A",
    borderRadius: "100vh",
    transition: "0.5s",
    display: "block",
    ":hover": {
      color: "#F05A5A",
      backgroundColor: "#FFFFFF",
    },
    selectors: {
      "&.holizontal": {
        display: "inline",
        marginRight: "10px",
      },
    },
  }),
}
