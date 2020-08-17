import React, { PropsWithChildren } from 'react';
import classes from './Title.module.css';

type titleStyle = 'title1' | 'title2' | 'title3';
type titleType = 'h1' | 'h2' | 'h3';
type titleMargin = 'normal' | 'big' | 'extra';

interface TitleProps {
  style: titleStyle,
  type: titleType,
  margin?: titleMargin,
  customClass?: string,
}

const Title: React.FC<PropsWithChildren<TitleProps>> = (props) => {

  const classList = [classes.title];

  if (props.customClass) {
    classList.push(props.customClass);
  }

  let titleElement: JSX.Element;

  switch (props.style) {
    case ('title1'):
      classList.push(classes.title1);
      break;
    case ('title2'):
      classList.push(classes.title2);
      break;
    case ('title3'):
      classList.push(classes.title3);
      break;
    default :
      classList.push(classes.title1);
  }

  switch (props.margin) {
    case ('normal'):
      break;
    case ('big'):
      classList.push(classes.titleSpaceBig);
      break;
    case ('extra'):
      classList.push(classes.titleSpaceExtra);
      break;
  }

  const argsList = {
    className: classList.join(' ')
  };

  switch (props.type) {
    case ('h1'):
      titleElement = (
        <h1 {...argsList}>
          {props.children}
        </h1>
      );
      break;
    case ('h2'):
      titleElement = (
        <h2 {...argsList}>
          {props.children}
        </h2>
      );
      break;
    case ('h3'):
      titleElement = (
        <h3 {...argsList}>
          {props.children}
        </h3>
      );
      break;
    default :
      titleElement = (
        <h1 {...argsList}>
          {props.children}
        </h1>
      );
  }

  return titleElement;
};

export default Title;
