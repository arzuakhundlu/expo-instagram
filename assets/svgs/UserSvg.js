import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function UserSvg() {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.073 20c.368-2.667 2.147-4 5.927-4s5.56 1.333 5.927 4M12 13c1.333 0 2-.714 2-2.5S13.333 8 12 8s-2 .714-2 2.5.667 2.5 2 2.5zm-6 7h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}