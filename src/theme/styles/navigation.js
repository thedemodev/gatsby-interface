import hex2rgba from "hex2rgba"
import colors from "../colors"
// import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"

import { spaces, transition } from "../../utils/presets"

const styles = {}

styles.Navigation = {
  default: { display: `flex` },
  hamburger: {},
}

styles.Hamburger = {}

styles.HamburgerIcon = {
  "&.active": {
    background: `0 0`,
    "&:after": {
      background: colors.white,
      top: 0,
      width: 24,
      transform: `rotate(-45deg)`,
    },
    "&:before": {
      background: colors.white,
      top: 0,
      width: 24,
      transform: `rotate(45deg)`,
    },
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
}

styles.Nav = {
  default: {
    margin: `0 0 0 auto`,
    padding: `0 ${spaces.m}`,
  },
  mobile: isMobileNavOpen => {
    return {
      display: isMobileNavOpen ? `block` : `none`,
      position: `fixed`,
      overflowY: `auto`,
      WebkitOverflowScrolling: `touch`,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      background: hex2rgba(colors.purple[90], 0.975),
      padding: `5rem 3.5rem 5rem`,
      alignItems: `center`,
      textAlign: `right`,
    }
  },
}

styles.List = {
  default: {
    listStyle: `none`,
  },
  mobile: {
    listStyle: `none`,
    margin: `0 auto`,
    padding: `0 1rem`,
    position: `relative`,
    zIndex: 1,
    width: `100%`,
    maxWidth: `90rem`,
    paddingLeft: `2rem`,
    paddingRight: `2rem`,
  },
}

const DropdownOpenStyles = {
  fontSize: fontSizes[1],
  fontFamily: fonts.system.join(`,`),
  left: `auto`,
  right: 0,
  boxShadow: `0px 4px 16px rgba(46, 41, 51, 0.08), 0px 8px 24px rgba(71, 63, 79, 0.16)`,
  background: colors.white,
  width: 260,
  borderRadius: 2,
  // color: colors.grey[50],
  ":after": {
    position: `absolute`,
    top: -6,
    right: 16,
    margin: `0 0 0 -6px`,
    width: 12,
    height: 12,
    content: `" "`,
    transform: `rotate(45deg)`,
    borderRadius: `2 0 0 0`,
    background: colors.white,
    boxShadow: `-3px -3px 10px ${hex2rgba(colors.lilac, 0.1)}`,
    willChange: `transform`,
    transitionProperty: `transform`,
    transitionDuration: transition.speed.default,
  },
}

const DropdownMobileStyles = {
  width: `100%`,
  color: colors.white,
  position: `relative`,
  background: 0,
  padding: 0,
  marginBottom: `calc(1.5rem / 2)`,
  ":after": {
    content: `none`,
  },
}

styles.Item = {
  default: {
    padding: `0 ${spaces.s}`,
    "&:hover > ul": {
      ...DropdownOpenStyles,
    },
  },
  mobile: {
    display: `block`,
    color: colors.white,
    "&:hover > ul": {
      ...DropdownMobileStyles,
    },
  },
}

styles.ItemLink = {
  default: isInverted => {
    return {
      display: `block`,
      textDecoration: `none`,
      color: `inherit`,
      fontSize: fontSizes[1],
      fontFamily: fonts.system.join(`,`),
      fontWeight: `normal`,
      transition: `opacity ${transition.speed.default}`,
      WebkitFontSmoothing: `antialiased`,
      lineHeight: `calc(2 * 5rem / 3)`,
      position: `relative`,
      "& span": {
        position: `relative`,
      },
      "&.nav-item-active": {
        color: isInverted ? colors.accent : colors.gatsby,
      },
      "&.nav-item-active span:after": {
        width: `100%`,
      },
      "& span:after": {
        position: `absolute`,
        content: `" "`,
        display: `block`,
        width: 0,
        height: 1,
        bottom: -4,
        opacity: 0.2,
        background: isInverted
          ? `linear-gradient(45deg, ${colors.orange[40]}, ${colors.accent})`
          : `linear-gradient(45deg, ${colors.lilac}, ${colors.gatsby})`,
        transition: `all ${transition.speed.default}`,
      },
      "&:hover": {
        opacity: 0.8,
      },
    }
  },
  mobile: {
    color: colors.white,
    fontFamily: fonts.header.join(`,`),
    fontWeight: `normal`,
    transition: `opacity ${transition.speed.default}`,
    WebkitFontSmoothing: `antialiased`,
    fontSize: fontSizes[6],
    "&:focus, &:hover": {
      color: colors.accent,
      background: `none`,
      opacity: 1,
    },
  },
}

styles.Dropdown = {
  default: {
    ...DropdownOpenStyles,
  },
  mobile: {
    display: `inline-block`,
    background: 0,
    ...DropdownMobileStyles,
  },
}

styles.DropdownToggle = {
  default: {
    marginLeft: spaces[`3xs`],
    border: `none`,
  },
  mobile: {
    display: `none`,
  },
}

styles.DropdownItem = {
  default: {
    a: {
      color: colors.grey[50],
      textDecoration: `none`,
      padding: `${spaces.s} ${spaces.l}`,
      display: `block`,
      transition: `all ${transition.speed.default}`,
      "&:hover": {
        color: colors.grey[90],
        background: hex2rgba(colors.accent, 0.1),
      },
      "&:focus-within": {
        color: colors.grey[90],
        background: hex2rgba(colors.accent, 0.1),
      },
    },
  },
  mobile: {
    a: {
      color: colors.white,
      textDecoration: `none`,
      padding: 0,
      margin: `${spaces[`xs`]} 0 0 0`,
      fontSize: fontSizes[1],
      "&:hover, &:focus-within": {
        opacity: 1,
        color: colors.accent,
        background: `none`,
      },
    },
  },
}

styles.Button = {
  default: {
    marginLeft: `.5rem`,
  },
  mobile: {
    marginTop: `.5rem`,
  },
}

export default styles
