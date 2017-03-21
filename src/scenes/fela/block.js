import React from 'react';
import { createComponent } from 'react-fela';
import colors from '../../utils/colors';

const Block = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Block.displayName = 'Block';

export default createComponent(props => ({
  minWidth: '16px',
  height: '16px',
  display: 'inline-block',
  padding: '15px',
  border: '0',
  fontWeight: 'bold',
  backgroundColor: props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  transition: [
    'background-color .5s',
    'color 1s'
  ],

  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  }
}), Block);
