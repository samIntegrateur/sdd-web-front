import React from 'react';

// This is used in svgr generations, if the model changes, watch out svgr-index-template.js
export interface SvgComponentList {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}
