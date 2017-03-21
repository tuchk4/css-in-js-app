
const getRgb = i => {
  switch (true) {
    case (i <= 255):
      return {
        r: i,
        g: 100,
        b: 100
      }

    case i > 255 && i <= 255 * 2:
      return {
        r: 255,
        g: i - 255,
        b: 100
      }

    case i > 255 * 2:
      return {
        r: 255,
        g: 255,
        b: i - 255 * 2
      }
    default:
      return {
        r: 100,
        g: 100,
        b: 100
      }
  }
}

const colors = [];

const treshold = 255 * 3;
for (let i = 0; i < 1000; i++) {
  const rgb = getRgb(i < treshold ? i : treshold - (i - treshold));
  colors.push([
    `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    `rgb(${rgb.b}, ${rgb.r}, ${rgb.g})`,
  ]);
};

export default colors;
