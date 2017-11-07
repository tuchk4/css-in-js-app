import glamorous from 'glamorous';
import config from '../../config';
import colors from '../../utils/colors';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = glamorous(Block)(
    {
      border: `${size + 2}px solid #000`,
      borderRadius: `${size * 6}px`,
      '&:hover': {
        backgroundColor: 'white !important',
        borderColor: 'black !important',
        color: 'black',
      },
    },
    props => ({
      borderColor: props.isPrimary ? colors[props.i][0] : colors[props.i][1],
    })
  );

  components.push(component);
}

export default components;
