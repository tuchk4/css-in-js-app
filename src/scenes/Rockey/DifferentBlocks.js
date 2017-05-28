import config from '../../config';
import colors from '../../utils/colors';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const component = Block`
    border: ${size + 2}px solid #000;
    border-radius: ${size * 6}px;
    border-color: ${props => (props.isPrimary ? colors[props.i][0] : colors[props.i][1])};

    :hover {
      background-color: white !important;
      border-color: black !important;
      color: black;
    }
  `;

  components.push(component);
}

export default components;
