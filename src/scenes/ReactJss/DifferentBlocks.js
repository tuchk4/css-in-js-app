import React from 'react';
import injectSheet from 'react-jss';
import config from '../../config';
import colors from '../../utils/colors';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const styles = {
    d_block: {
      border: `${size + 2}px solid #000`,
      borderRadius: `${size * 6}px`,
      borderColor: props =>
        props.isPrimary ? colors[props.i][0] : colors[props.i][1],
      '&:hover': {
        backgroundColor: 'white !important',
        borderColor: 'black !important',
        color: 'black',
      },
    },
  };

  const component = injectSheet(styles)(({ classes, children, ...props }) => {
    return <Block className={classes.d_block} {...props}>{children}</Block>;
  });

  components.push(component);
}

export default components;
