import { styled } from 'styletron-react';
import colors from '../../utils/colors';

const Block = styled('div', props => ({
  minWidth: '16px',
  height: '16px',
  display: 'inline-block',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  backgroundColor: props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  ':hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
}));

export default Block;
