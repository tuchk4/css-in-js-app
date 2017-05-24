import React from 'react';

import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import jssCompose from 'jss-compose';

import colors from '../../utils/colors';

const jss = createJss();
jss.use(jssCompose());

const injectSheet = createInjectSheet(jss);

const styles = {
  block: {
    'min-width': '16px',
    height: '16px',
    float: 'left',
    'text-align': 'center',
    padding: '15px',
    border: 'none',
    transition: 'background-color .5s',
    'font-weight': 'bold',
    'background-color': props =>
      props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  },
};

const Block = ({ i, isPrimary, classes, className, children }) => {
  return (
    <div className={`${className} ${classes.block} ${classes.blockBackground}`}>
      {children}
    </div>
  );
};

export default injectSheet(styles)(Block);
