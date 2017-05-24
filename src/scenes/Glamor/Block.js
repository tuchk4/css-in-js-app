import React from 'react';
import { css } from 'glamor';
import colors from '../../utils/colors';

const blockRule = css({
  minWidth: '16px',
  height: '16px',
  float: 'left',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  transition: 'background-color .5s',
  '&:hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
});

const Block = ({ i, isPrimary, className, classes, children }) => {
  const backgroundRule = css({
    backgroundColor: isPrimary ? colors[i][1] : colors[i][0],
  });

  return (
    <div className={`${className} ${blockRule} ${backgroundRule}`}>
      {children}
    </div>
  );
};

export default Block;
