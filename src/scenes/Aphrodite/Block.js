import React from 'react';
import classnames from 'classnames';
import { StyleSheet, css } from 'aphrodite/no-important';

import colors from '../../utils/colors';

const styles = {
  block: {
    minWidth: '16px',
    height: '16px',
    display: 'inline-block',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
};

const sheet = StyleSheet.create(styles);

const Block = ({ i, isPrimary, className, classes, children }) => {
  // There is no way to make dynamic styles with Aphrodite
  // Only create stylesheets in components render method
  const dynamicStyles = {
    block: {
      backgroundColor: isPrimary ? colors[i][1] : colors[i][0],
    },
  };

  const dynamicSheet = StyleSheet.create(dynamicStyles);

  const classList = css(sheet.block, dynamicSheet.block);

  return <div className={classnames(classList, className)}>{children}</div>;
};

export default Block;
