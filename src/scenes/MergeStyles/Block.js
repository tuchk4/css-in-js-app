import * as React from 'react';
import { mergeStyles } from '@uifabric/merge-styles';
import colors from '../../utils/colors';

export const StyledDiv = props => {
  const className = mergeStyles(
    {
      minWidth: 16,
      height: 16,
      display: 'inline-block',
      textAlign: 'center',
      padding: 15,
      border: 'none',
      fontWeight: 'bold',
      backgroundColor: props.isPrimary
        ? colors[props.i][1]
        : colors[props.i][0],

      selectors: {
        ':hover': {
          backgroundColor: 'black',
          color: 'white',
        },
      },
    },
    props.className
  );

  return <div {...props} className={className} />;
};

export default StyledDiv;
