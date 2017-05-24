import React from 'react';
import colors from '../../utils/colors';

export default props => {
  return (
    <div
      style={{
        minWidth: '16px',
        height: '16px',
        float: 'left',
        textAlign: 'center',
        padding: '15px',
        border: 'none',
        fontWeight: 'bold',
        transition: 'background-color .5s',
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
