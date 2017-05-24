import React from 'react';
import colors from '../../utils/colors';

export default props => {
  return (
    <div
      style={{
        minWidth: '16px',
        height: '16px',
        display: 'inline-block',
        textAlign: 'center',
        padding: '15px',
        border: 'none',
        fontWeight: 'bold',
        backgroundColor: props.isPrimary
          ? colors[props.i][1]
          : colors[props.i][0],
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
