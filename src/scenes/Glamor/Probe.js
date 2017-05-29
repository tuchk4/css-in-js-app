import React from 'react';
import { css } from 'glamor';

let keyframes = css.keyframes({
  from: {
    color: 'red',
  },

  to: {
    color: 'blue',
  },
});

const blockRule = css({
  animation: `2s ${keyframes}`,
});

const Probe = props => {
  return <div {...props} className={blockRule} />;
};

export default Probe;
