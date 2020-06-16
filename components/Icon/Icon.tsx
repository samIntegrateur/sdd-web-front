import SvgList, { SvgNames } from '../Svg';
import React, { PropsWithChildren } from 'react';
import { SvgComponentList } from '../Svg/Svg.types';
import classes from './Icon.module.css';

interface IconProps {
  icon: SvgNames;
  size?: 'normal' | 'big' | 'extra';
  color?: 'white' | 'black' | 'primary' | 'secondary';
}

const Icon: React.FC<PropsWithChildren<IconProps>> = (
  {
    icon,
    size= 'normal',
    color= 'white'
  }) => {

  let components: SvgComponentList = {};

  Object.keys(SvgList).forEach(componentName => {
    components = {
      ...components,
      [componentName]: SvgList[componentName] as React.FC<React.SVGProps<SVGSVGElement>>
    }
  });

  const classList = [classes.icon];

  switch (size) {
    case ('normal'):
      break;
    case ('big'):
      classList.push(classes.iconBig);
      break;
    case ('extra'):
      classList.push(classes.iconExtra);
      break;
  }

  switch (color) {
    case ('white'):
      break;
    case ('black'):
      classList.push(classes.iconBlack);
      break;
    case ('primary'):
      classList.push(classes.iconPrimary);
      break;
    case ('secondary'):
      classList.push(classes.iconSecondary);
      break;
  }

  const IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = components[icon];

  return (
    <IconComponent className={classList.join(' ')} />
  );
};

export default Icon;

