import * as React from "react";

function SvgPaperplane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M99.996.062C99.174-1.804 1.72 39.431 0 37.709c.29.875 40.236 17.339 40 16.344.066 1.305 24.638-17.91 24.638-17.91S48.341 58.099 46.879 59.854c1.165 1.195 13 31.963 15.516 40.146.236-4.264 38.053-98.537 37.601-99.938zM61.482 87.636c.023-1.146-9.904-25.931-10.125-25.657 2.334-3.087 23.496-34.592 28.717-41.544-6.988 6.307-40.906 29.071-40.788 29.421-1.39-1.283-27.732-11.603-30.19-12.071C13.46 36.801 95.1 5.519 95.529 3.882c-.259.304-32.562 84.47-34.047 83.754z" />
    </svg>
  );
}

export default SvgPaperplane;