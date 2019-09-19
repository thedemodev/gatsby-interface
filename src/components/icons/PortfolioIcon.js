import React from "react"
import PropTypes from "prop-types"
import IconSkeleton from "./IconSkeleton"

export default function PortfolioIcon(props) {
  return (
    <IconSkeleton {...props} iconName="portfolio">
      <path
        d="M6.43308 15.749C6.06531 14.8383 5.92674 13.8512 6.02954 12.8744C6.13233 11.8976 6.47335 10.961 7.02265 10.1468C7.57196 9.33253 8.31275 8.66561 9.17999 8.20454C10.0472 7.74347 11.0144 7.50235 11.9966 7.50235C12.9788 7.50235 13.9459 7.74347 14.8132 8.20454C15.6804 8.66561 16.4212 9.33253 16.9705 10.1468C17.5198 10.961 17.8608 11.8976 17.9636 12.8744C18.0664 13.8512 17.9279 14.8383 17.5601 15.749"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1551 7.78601L11.8461 10.048C11.9643 10.2056 12.0503 10.3849 12.0992 10.5757C12.1481 10.7666 12.1589 10.9651 12.131 11.1601C12.1032 11.3551 12.0372 11.5428 11.9368 11.7123C11.8364 11.8817 11.7037 12.0298 11.5461 12.148L9.74609 13.498V14.248C9.74609 14.6458 9.58806 15.0274 9.30675 15.3087C9.02545 15.59 8.64392 15.748 8.24609 15.748"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.629 11.427L15.323 12.587C15.0175 12.7396 14.7732 12.9918 14.6305 13.302C14.4878 13.6121 14.4551 13.9618 14.538 14.293L14.91 15.749"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.74609 2.24799V0.747986"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2461 2.24799V0.747986"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 18.748C7.5 19.1458 7.65804 19.5273 7.93934 19.8086C8.22064 20.09 8.60218 20.248 9 20.248H15C15.3978 20.248 15.7794 20.09 16.0607 19.8086C16.342 19.5273 16.5 19.1458 16.5 18.748"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2461 15.748H1.74609C1.19381 15.748 0.746094 16.1957 0.746094 16.748V22.248C0.746094 22.8003 1.19381 23.248 1.74609 23.248H22.2461C22.7984 23.248 23.2461 22.8003 23.2461 22.248V16.748C23.2461 16.1957 22.7984 15.748 22.2461 15.748Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.748V3.74799C3 3.35016 3.15804 2.96863 3.43934 2.68733C3.72064 2.40602 4.10218 2.24799 4.5 2.24799H19.5C19.8978 2.24799 20.2794 2.40602 20.5607 2.68733C20.842 2.96863 21 3.35016 21 3.74799V15.748"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSkeleton>
  )
}

PortfolioIcon.propTypes = {
  size: IconSkeleton.propTypes.size,
  width: PropTypes.string,
  height: PropTypes.string,
}
