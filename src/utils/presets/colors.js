import { colors as baseColors } from "gatsby-design-tokens"

let colors = {
  ...baseColors,
}

const elementColors = {
  primaryBackground: colors.white,
  secondaryBackground: colors.grey[5],
  standardLine: colors.grey[20],
}

colors = {
  ...colors,
  ...elementColors,
}

export { colors }

/** 
  the following palette object is maintained and exported only for old code in cloud app
  in the future the codebase should be updated to use new colors tokens
  instead colors.purle[50] now we use color.purlpe[5]
*/

export const palette = {
  purple: {
    900: `#362066`,
    800: `#452475`,
    700: `#542c85`,
    600: `#663399`,
    500: `#8a4baf`,
    400: `#b17acc`,
    300: `#d9bae8`,
    200: `#f1defa`,
    100: `#f6edfa`,
    50: `#fcfaff`,
  },
  orange: {
    900: `#db3a00`,
    800: `#e65800`,
    700: `#f67300`,
    600: `#fb8400`,
    500: `#ffb238`,
    400: `#ffd280`,
    300: `#ffe4a1`,
    200: `#ffedbf`,
    100: `#fff4db`,
    50: `#fffcf7`,
  },
  yellow: {
    900: `#8a6534`,
    800: `#bf9141`,
    700: `#e3a617`,
    600: `#fec21e`,
    500: `#fed038`,
    400: `#ffdf37`,
    300: `#ffeb99`,
    200: `#fff2a8`,
    100: `#fff5bf`,
    50: `#fffdf7`,
  },
  red: {
    900: `#b80000`,
    800: `#ce0009`,
    700: `#da0013`,
    600: `#ec1818`,
    500: `#fa2915`,
    400: `#ff5a54`,
    300: `#ff8885`,
    200: `#ffbab8`,
    100: `#fde7e7`,
    50: `#fffafa`,
  },
  magenta: {
    900: `#690147`,
    800: `#7d0e59`,
    700: `#940159`,
    600: `#a6026a`,
    500: `#bc027f`,
    400: `#d459ab`,
    300: `#e899ce`,
    200: `#f2c4e3`,
    100: `#ffe6f6`,
    50: `#fffafd`,
  },
  blue: {
    900: `#004ca3`,
    800: `#006ac1`,
    700: `#047bd3`,
    600: `#0e8de6`,
    500: `#0d96f2`,
    400: `#3fa9f5`,
    300: `#63b8f6`,
    200: `#90cdf9`,
    100: `#dbf0ff`,
    50: `#f5fcff`,
  },
  teal: {
    900: `#008577`,
    800: `#10a39e`,
    700: `#00bdb6`,
    600: `#2de3da`,
    500: `#05f7f4`,
    400: `#73fff7`,
    300: `#a6fffa`,
    200: `#ccfffc`,
    100: `#dcfffd`,
    50: `#f7ffff`,
  },
  green: {
    900: `#006500`,
    800: `#088413`,
    700: `#1d9520`,
    600: `#2ca72c`,
    500: `#37b635`,
    400: `#59c156`,
    300: `#79cd75`,
    200: `#a1da9e`,
    100: `#def5dc`,
    50: `#f7fdf7`,
  },
  grey: {
    900: `#232129`,
    800: `#36313d`,
    700: `#48434f`,
    600: `#635e69`,
    500: `#78757a`,
    400: `#b7b5bd`,
    300: `#d9d7e0`,
    200: `#f0f0f2`,
    100: `#f5f5f5`,
    50: `#fbfbfb`,
  },
  white: `#ffffff`,
  black: `#000000`,
}
