import styled from 'styled-components';
import colors from '../../utils/colors';

export default styled.div`
  min-width: 16px;
  height: 16px;
  float: left;
  text-align: center;
  padding: 15px;
  border: none;
  font-weight: bold;
  background-color: ${props => (props.isPrimary ? colors[props.i][1] : colors[props.i][0])};
  &:hover {
    background-color: black;
    color: white;
  }
`;
