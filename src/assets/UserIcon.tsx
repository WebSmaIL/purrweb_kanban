import * as React from "react"
import { SVGProps } from "react"

const UserIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={459}
    height={459}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M229.5 0C102.53 0 0 102.845 0 229.5 0 356.301 102.719 459 229.5 459 356.851 459 459 355.815 459 229.5 459 102.547 356.079 0 229.5 0Zm118.101 364.67C314.887 393.338 273.4 409 229.5 409c-43.892 0-85.372-15.657-118.083-44.314a16.37 16.37 0 0 1-5.245-15.597c11.3-55.195 46.457-98.725 91.209-113.047C174.028 222.218 158 193.817 158 161c0-46.392 32.012-84 71.5-84s71.5 37.608 71.5 84c0 32.812-16.023 61.209-39.369 75.035 44.751 14.319 79.909 57.848 91.213 113.038a16.39 16.39 0 0 1-5.243 15.597Z"
        fill="#9b9b9b"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h459v459H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default UserIconSvg