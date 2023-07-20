import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function MenuSvg() {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
      />
    </Svg>
  )
}
