import { styled } from 'styletron-react';
import colors from '../../utils/colors';
import config from '../../config';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = styled(Block, props => ({
    borderSize: `${size + 2}px `,
    borderStyle: 'solid',
    borderRadius: `${size * 6}px`,
    borderColor: props.isPrimary ? colors[props.i][0] : colors[props.i][1],
    ':hover': {
      backgroundColor: 'white !important',
      borderColor: 'black !important',
      color: 'black',
    },
  }));

  components.push(component);
}

export default components;
