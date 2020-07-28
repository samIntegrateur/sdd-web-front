import * as React from "react";

function SvgSmile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M51.773.079C24.657-1.344 1.877 22.395.001 49.464c-.215 27.787 22.11 50.632 51.422 50.535 27.248-.963 48.813-22.439 48.574-51.168C99.742 21.878 79.26-1.535 51.773.079zm.856 95.836C23.559 95.907 1.227 74.656 3.803 50 5.583 23.661 26.664 4.087 49.666 2.732c26.5.19 46.061 22.367 44.713 48.092 2.391 24.095-18.397 45.336-41.75 45.091zM33.525 49.706l.025-1.576c6.179-.57 11.675-4.068 11.62-10.69-.062-6.452-4.983-12.075-11.562-11.688-6.49-.341-11.962 5.36-12.412 11.84-.05 6.65 5.312 12.137 12.329 12.114zm-.403-20.28l-.049-1.221c4.639.033 8.49 4.982 8.253 9.484.419 4.218-3.525 8.088-7.612 8.045-5.089-.002-8.742-3.717-8.291-8.033-.45-4.386 3.789-7.851 7.699-8.275zm48.805 27.575c-.132.036-63.113.14-63.113.14s8.072 22.405 32.688 22.772c24.844-.323 31.578-22.785 30.425-22.912zm-6.506 3.827c-4.497 9.19-14.152 15.124-23.513 15.084-12.443-.001-22.459-6.865-25.956-15.903-1.38-.059 47.862 1.015 49.469.819l.01-.019c.046.007.04.013-.01.019zm-6.54-11.122l.025-1.576c6.179-.57 11.674-4.068 11.619-10.69-.061-6.452-4.982-12.075-11.562-11.688-6.489-.341-11.962 5.36-12.411 11.84-.052 6.65 5.311 12.137 12.329 12.114zm-.404-20.28l-.049-1.221c4.639.033 8.49 4.982 8.254 9.484.419 4.218-3.525 8.088-7.613 8.045-5.089-.002-8.742-3.717-8.29-8.033-.451-4.386 3.789-7.851 7.698-8.275z" />
    </svg>
  );
}

export default SvgSmile;
