import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = {
  probe: {
    animationName: [
      {
        from: {
          color: 'red',
        },

        to: {
          color: 'blue',
        },
      },
    ],
    animationDuration: '1s',
  },
};

const sheet = StyleSheet.create(styles);

const Probe = ({ onAnimationStart }) => {
  return (
    <div onAnimationStart={onAnimationStart} className={css(sheet.probe)} />
  );
};

export default Probe;
