import glamorous from 'glamorous';
import colors from '../../utils/colors';

export default glamorous.div(
  {
    minWidth: '16px',
    height: '16px',
    display: 'inline-block',
    textAlign: 'center',
    padding: '15px',
    border: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  props => ({
    backgroundColor: props.isPrimary ? colors[props.i][1] : colors[props.i][0],
  })
);
