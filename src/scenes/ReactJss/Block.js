import React from 'react';
import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import preset from 'jss-preset-default';

import colors from '../../utils/colors';

const jss = createJss(preset());
const injectSheet = createInjectSheet(jss);

const styles = {
  block: {
    minWidth: '16px',
    height: '16px',
    float: 'left',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color .5s',
    backgroundColor: props =>
      props.isPrimary ? colors[props.i][1] : colors[props.i][0],
    '&:hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
};

const Block = ({ classes, className, children }) => {
  return <div className={`${className} ${classes.block}`}>{children}</div>;
};

export default injectSheet(styles)(Block);
