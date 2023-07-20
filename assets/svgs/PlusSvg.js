import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function PlusSvg({width,height}) {
  return (
    <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 7v10m-5-5h10"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}
