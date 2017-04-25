import React from 'react';
import classnames from 'classnames';

import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import preset from 'jss-preset-default';

const jss = createJss(preset());
const injectSheet = createInjectSheet(jss);

import colors from '../../utils/colors';

const styles = {
  block: {
    minWidth: '16px',
    height: '16px',
    float: 'left',
    textAlign: 'center',
    padding: '15px',
    border: '0',
    fontWeight: 'bold',
    transition: 'background-color .5s, color 1s',
    '&:hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
};

for (let i = 0; i < colors.length; i++) {
  styles[`block${i}`] = {
    backgroundColor: colors[i][0],
  };

  styles[`primaryBlock${i}`] = {
    backgroundColor: colors[i][1],
  };
}

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = classnames(className, classes.block, classes[`block${i}`], {
    [classes[`primaryBlock${i}`]]: isPrimary,
  });

  return <div className={classList}>{children}</div>;
};

Block.displayName = 'Block';

export default injectSheet(styles)(Block);
