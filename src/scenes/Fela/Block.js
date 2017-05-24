import React from 'react';
import { createComponent } from 'react-fela';
import colors from '../../utils/colors';

const Block = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default createComponent(
  props => ({
    minWidth: '16px',
    height: '16px',
    float: 'left',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color .5s',
    backgroundColor: props.isPrimary ? colors[props.i][1] : colors[props.i][0],
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  Block
);
