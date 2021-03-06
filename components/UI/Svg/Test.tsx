import * as React from "react";

function SvgTest(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 125" {...props}>
      <path d="M63.487 36.95c1.204-2.085.378-32.61.722-35.967C63.346 3.064 35.25.236 34.056 0c.773.255-.016 37.291-.443 37.371.363-2.088-33.06-2.296-33.373-1.257.081-.533-.124 28.278-.24 30.97.324-1.448 32.654-1.516 33.834-2.144.169 1.753.874 32.617-.079 33.714 1.397.427 29.888 1.715 30.399 1.243 1.621-1.156.697-34.819.859-34.756-.787-.975 34.867-1.422 33.396-.39 1.299 1.244.545-26.723 1.59-28.4-3.041-.052-35.163.825-36.512.599zm32.527 26.305c.311-1.394-34.5-1.404-35.883-2.055.13.02.846 32.784-.061 33.827 1.291.395-22.627 1.585-22.154 1.149 1.612-1.15.674-34.766.794-34.719-.704-.871-32.755-1.287-36.043-.447.937-1.839.264-22.688 1.44-21.021.391-.095 34.47.762 33.192.547 1.134-1.963.322-33.763.685-35.983.432 2.122 21.917-.354 22.394-.73.649 1.201-.016 35.302-.41 37.035 1.175-1.866 36.554-2.043 36.267-1.094.075-.493-.115 21.001-.221 23.491z" />
      <text
        y={115}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {"Created by b farias"}
      </text>
      <text
        y={120}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {"from the Noun Project"}
      </text>
    </svg>
  );
}

export default SvgTest;
