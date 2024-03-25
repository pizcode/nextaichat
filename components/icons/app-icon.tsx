import { SVGAttributes } from "react";

export function AppIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="16pt"
      height="16pt"
      viewBox="0 0 16 16"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      {...props}
    >
      <g transform="translate(0,16) scale(0.1,-0.1)" stroke="none">
        <path
          d="M0 80 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z m120 60 c20 0
31 -39 23 -82 -4 -19 -12 -28 -24 -28 -11 0 -19 -4 -19 -10 0 -5 -9 -10 -20
-10 -11 0 -20 5 -20 10 0 6 -8 10 -19 10 -21 0 -33 38 -24 82 5 26 37 40 71
31 8 -1 22 -3 32 -3z"
        />
        <path
          d="M40 85 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39 0
-40 -1 -40 -35z m30 10 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10
15 6 0 10 -7 10 -15z m40 0 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15
10 15 6 0 10 -7 10 -15z m-17 -32 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19
-2 13 -5z"
        />
      </g>
    </svg>
  );
}
