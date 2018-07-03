import * as React from 'react';
import { mergeStyles, keyframes } from '@uifabric/merge-styles';

const probe = keyframes({
  from: {
    color: 'red',
  },

  to: {
    color: 'blue',
  },
});

export default props => {
  const className = mergeStyles(
    {
      animation: `${probe} 1s`,
    },
    props.className
  );

  return <div {...props} className={className} />;
};
