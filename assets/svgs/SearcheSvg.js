import React from 'react'
import Svg, { Path } from "react-native-svg"

export default function SearcheSvg({width,height}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
