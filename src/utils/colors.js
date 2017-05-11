import config from '../config';

const getRgb = i => {
  switch (true) {
    case i <= 255:
      return {
        r: i,
        g: 100,
        b: 100,
      };

    case i > 255 && i <= 255 * 2:
      return {
        r: 255,
        g: i - 255,
        b: 100,
      };

    case i > 255 * 2:
      return {
        r: 255,
        g: 255,
        b: i - 255 * 2,
      };
    default:
      return {
        r: 100,
        g: 100,
        b: 100,
      };
  }
};

const colors = [];

let j = 1;
let direction = true;
for (let i = 0; i < config.size; i++) {
  if (j === 0 || j === 255 * 3) {
    direction = !direction;
  }

  const rgb = getRgb(j);
  colors.push([
    `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    `rgb(${rgb.b}, ${rgb.r}, ${rgb.g})`,
  ]);

  direction ? j++ : j--;
}

export default colors;
