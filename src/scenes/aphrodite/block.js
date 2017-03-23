import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import colors from '../../utils/colors';

const styles = {
  button: {
    minWidth: '16px',
    height: '16px',
    float: 'left',
    textAlign: 'center',
    padding: '15px',
    border: '0',
    fontWeight: 'bold',
    transition: 'background-color .5s, color 1s',
    ':hover': {
      backgroundColor: 'black !important',
      color: 'white',
    },
  },
  primary: {},
};

for (let i = 0; i < colors.length; i++) {
  styles[`button${i}`] = {
    backgroundColor: colors[i][0],
  };

  styles[`primaryButton${i}`] = {
    backgroundColor: colors[i][1],
  };
}

const sheet = StyleSheet.create(styles);

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = css(
    sheet.button,
    sheet[`button${i}`],
    isPrimary && [sheet.primary],
    isPrimary && [sheet[`primaryButton${i}`]]
  );

  return <div className={`${classList} ${className}`}>{children}</div>;
};

Block.displayName = 'Block';

export default Block;
