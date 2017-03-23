import config from '../../config';
import styled from 'styled-components';
import Block from './block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const component = styled(Block)`
    float: none;
    display: inline-block;
    border: ${size + 2}px solid #000;
    border-radius: ${size * 6}px;
  `;

  components.push(component);
}

export default components;
