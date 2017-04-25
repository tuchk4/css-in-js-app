import React from 'react';
import config from '../../config';
import injectSheet from 'react-jss';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const styles = {
    sizedButton: {
      float: 'none',
      display: 'inline-block',
      border: `${size + 2}px solid #000`,
      borderRadius: `${size * 6}px`,
    },
  };

  const component = injectSheet(styles)(({ classes, children, ...props }) => {
    return <Block className={classes.sizedButton} {...props}>{children}</Block>;
  });

  components.push(component);
}

export default components;
