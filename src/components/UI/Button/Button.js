import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  const classes = [styles.Button];

  if (props.size) {
    switch (props.size) {
      case 'small':
        classes.push(styles.ButtonSmall);
        break;
      case 'large':
        classes.push(styles.ButtonLarge);
        break;
      default:
        break;
    }
  }

  return (
    <button
      className={
        props.classes
          ? classes.concat(props.classes).join(' ')
          : classes.join(' ')
      }
      style={props.buttonStyle}
      onClick={props.clicked}
      disabled={props.notAvailable}
    >
      {props.text}
    </button>
  );
};

export default Button;
