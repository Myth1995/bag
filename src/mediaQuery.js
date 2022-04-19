import { css } from "@emotion/react"

const breakpoints = {
  // Numerical values will result in a min-width query
  xs: 400,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  xxLarge: 1440, 
  // String values will be used as is
  tallPhone: "max-width: 360px",
}

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === "string" ? "" : "min-width:"
  let suffix = typeof breakpoints[label] === "string" ? "" : "px"
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${css`
          ${cls};
        `};
      }
    `
  return accumulator
}, {})

export default mq
