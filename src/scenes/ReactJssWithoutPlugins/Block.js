import React from 'react';
import classnames from 'classnames';

import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';

import colors from '../../utils/colors';

const jss = createJss();
const injectSheet = createInjectSheet(jss);

const styles = {
  block: {
    'min-width': '16px',
    height: '16px',
    float: 'left',
    'text-align': 'center',
    padding: '15px',
    border: 'none',
    'font-weight': 'bold',
  },
};

for (let i = 0; i < colors.length; i++) {
  styles[`block${i}`] = {
    'background-color': colors[i][0],
  };

  styles[`primaryBlock${i}`] = {
    'background-color': colors[i][1],
  };
}

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = classnames(className, classes.block, classes[`block${i}`], {
    [classes[`primaryBlock${i}`]]: isPrimary,
  });

  return <div className={classList}>{children}</div>;
};

export default injectSheet(styles)(Block);
