import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Block = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Block.displayName = 'Block';

export default styled(Block)`
  min-width: 16px;
  height: 16px;
  display: inline-block;
  padding: 15px;
  border: 0;
  font-weight: bold;
  background-color: ${props => props.isPrimary ? colors[props.i][1] : colors[props.i][0]};
  transition: background-color .5s;
  transition: color 1s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
