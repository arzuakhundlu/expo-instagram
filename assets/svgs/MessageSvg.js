import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function MessageSvg() {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M294.957 7251.413l-2.601-2.66-5.012 2.727 5.494-5.737 2.602 2.66 5.012-2.727-5.495 5.737zm-1.06-12.413c-5.556 0-9.897 4.144-9.897 9.257 0 2.908.853 5.503 3.902 7.2V7259l3.27-1.874c.915.252 1.804.387 2.808.387 5.556 0 10.02-4.144 10.02-9.256 0-5.113-4.545-9.257-10.103-9.257z"
        transform="translate(-340 -7399) translate(56 160)"
        fill="#fff"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}
