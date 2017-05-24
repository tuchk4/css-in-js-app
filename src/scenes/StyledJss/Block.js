import styled from 'styled-jss';
import colors from '../../utils/colors';

const Block = styled('div')({
  minWidth: '16px',
  height: '16px',
  display: 'inline-block',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  backgroundColor: props =>
    props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  '&:hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
});

export default Block;
