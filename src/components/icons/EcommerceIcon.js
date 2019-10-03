import React from "react"
import PropTypes from "prop-types"
import IconSkeleton from "./IconSkeleton"

export default function EcommerceIcon(props) {
  return (
    <IconSkeleton {...props} iconName="ecommerce">
      <path
        d="M3.75 5.25001C3.74961 4.96756 3.80495 4.6878 3.91286 4.42677C4.02076 4.16574 4.17912 3.92857 4.37884 3.72885C4.57857 3.52912 4.81574 3.37077 5.07677 3.26286C5.33779 3.15496 5.61755 3.09961 5.9 3.10001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 4.687C0.75 3.64284 1.16479 2.64145 1.90312 1.90312C2.64145 1.16479 3.64284 0.75 4.687 0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5001 16.5H7.6731C7.39125 16.5008 7.11717 16.4077 6.89422 16.2353C6.67127 16.0628 6.51217 15.821 6.4421 15.548L4.5421 9.061C4.49636 8.87508 4.49359 8.68119 4.534 8.49405C4.57441 8.3069 4.65694 8.13143 4.77532 7.98095C4.89369 7.83047 5.04481 7.70895 5.21718 7.62561C5.38955 7.54228 5.57864 7.49932 5.7701 7.5H18.9801C19.1719 7.49866 19.3614 7.54116 19.5343 7.62424C19.7071 7.70732 19.8587 7.82878 19.9775 7.97937C20.0962 8.12996 20.179 8.30569 20.2195 8.49314C20.26 8.68059 20.2571 8.87482 20.2111 9.061L19.9001 10.116"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4999 7.5L15.6709 3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.5L9.828 3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.135 23.25L23.235 22.128C23.301 21.4017 23.1001 20.6762 22.67 20.0873C22.2399 19.4983 21.6099 19.0862 20.898 18.928L16.726 18V12C16.726 11.6022 16.5679 11.2206 16.2866 10.9393C16.0053 10.658 15.6238 10.5 15.226 10.5C14.8282 10.5 14.4466 10.658 14.1653 10.9393C13.884 11.2206 13.726 11.6022 13.726 12V21.75L12.026 20.472C11.731 20.2504 11.3659 20.1428 10.9979 20.1688C10.6298 20.1949 10.2836 20.3528 10.0227 20.6137C9.7618 20.8746 9.60383 21.2209 9.5778 21.5889C9.55176 21.9569 9.65942 22.322 9.88098 22.617L10.355 23.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSkeleton>
  )
}

EcommerceIcon.propTypes = {
  size: IconSkeleton.propTypes.size,
  width: PropTypes.string,
  height: PropTypes.string,
}
