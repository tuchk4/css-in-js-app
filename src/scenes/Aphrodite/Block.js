import React from 'react';
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
  primary: {},
};

for (let i = 0; i < colors.length; i++) {
  styles[`block${i}`] = {
    backgroundColor: colors[i][0],
  };

  styles[`primaryBlock${i}`] = {
    backgroundColor: colors[i][1],
  };
}

const sheet = StyleSheet.create(styles);

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = css(
    sheet.block,
    sheet[`block${i}`],
    isPrimary && [sheet[`primaryBlock${i}`]]
  );

  return <div className={`${classList} ${className}`}>{children}</div>;
};

export default Block;
