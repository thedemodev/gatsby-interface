/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"

import {  fontSizes } from "../../utils/presets"
import space  "../../theme/space"

const InputError = ({ children }) => (
  <p
    css={{
      color: colors.red[60],
      fontSize: fontSizes.xs,
      lineHeight: `1`,
      padding: `0`,
      margin: `${spaces.xs} ${space[2]} 0`,
      svg: {
        color: `current-color`,
        marginRight: space[2],
        verticalAlign: `text-top`,
      },
    }}
  >
    {children}
  </p>
)

InputError.propTypes = {
  children: PropTypes.node,
}

export default InputError
