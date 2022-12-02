import * as React from "react"
import { SVGProps } from "react"

const AcceptSvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16.516 8.935-5.456 5.767-2.964-2.804"
      stroke="#9b9b9b"
      strokeWidth={2}
    />
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke="#9b9b9b"
      strokeWidth={2}
    />
  </svg>
)

export default AcceptSvgComponent;