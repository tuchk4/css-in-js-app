import React from 'react';
import classnames from 'classnames';
import { styled } from 'glamor/styled';
import colors from '../../utils/colors';

export default styled.div`
  min-width: 16px;
  height: 16px;
  float: left;
  text-align: center;
  padding: 15px;
  border: 0;
  font-weight: bold;
  background-color: ${props => (props.isPrimary ? colors[props.i][1] : colors[props.i][0])};
  transition: background-color .5s, color 1s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
