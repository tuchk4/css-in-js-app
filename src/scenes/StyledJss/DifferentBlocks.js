import styled from 'styled-jss';
import config from '../../config';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const component = styled(Block)({
    border: `${size + 2}px solid #000`,
    borderRadius: `${size * 6}px`,
  });

  components.push(component);
}

export default components;
