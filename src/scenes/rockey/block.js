import React from 'react';
import rockey from 'rockey-react';
import colors from '../../utils/colors';

const Block = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

Block.displayName = 'Block';

export default rockey(Block)`
  min-width: 16px;
  height: 16px;
  float: left;
  text-align: center;
  padding: 15px;
  border: 0;
  font-weight: bold;
  transition: background-color .5s, color 1s;

  :hover {
    background-color: black !important;
    color: white;
  }

  ${function prettyBackground(props) {
  return `
      background-color: ${props.isPrimary ? colors[props.i][1] : colors[props.i][0]};
    `;
}}
`;
