import React from 'react';
import classes from './Container.module.css';

interface ContainerProps {
  small?: boolean;
  full?: boolean;
  smallPaddingY?: boolean;
}
const Container: React.FC<ContainerProps> = (props) => {

  const classList = [classes.container];

  if (props.small) {
    classList.push(classes.containerSmall);
  }

  if (props.full) {
    classList.push(classes.containerFull);
  }

  if (props.smallPaddingY) {
    classList.push(classes.containerSmallPaddingY);
  }
  
  return (
    <div className={classList.join(' ')}>
      {props.children}
    </div>
  );
};

export default Container;
