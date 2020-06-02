import * as React from "react"

function Gradient(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 780 393" {...props}>
      <title>{"Rectangle"}</title>
      <defs>
        <linearGradient
          x1="60.742%"
          y1="59.241%"
          x2="50%"
          y2="46.688%"
          id="prefix__a"
        >
          <stop stopColor="#EEE" stopOpacity={0.2} offset="0%" />
          <stop stopColor="#D8D8D8" stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <path
        stroke="#979797"
        fill="url(#prefix__a)"
        d="M.5.5h779v392H.5z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Gradient
