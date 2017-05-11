import config from '../config';
import tinygradient from 'tinygradient';

var gradient1 = tinygradient.rgb(
  ['#43C6AC', '#F8FFAE', '#fc00ff', '#CFDEF3', '#3494E6'],
  config.size
);

var gradient2 = tinygradient.rgb(
  ['#dc2430', '#c2e59c', '#FFB75E', '#7b4397', '#00dbde'],
  config.size
);

export default gradient1.map((color, i) => {
  return [`#${color.toHex()}`, `#${gradient2[i].toHex()}`];
});
