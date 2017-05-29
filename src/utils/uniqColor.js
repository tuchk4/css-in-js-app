import config from '../config';

const colors = [];

let start1 = Number(12000000);
let start2 = Number(8000000);

const cache = [];

for (let i = 0; i < config.size; i++) {
  const f = `#${(start1 + i * 55).toString(16)}`;
  const s = `#${(start2 + i * 75).toString(16)}`;

  if (cache.indexOf(f) !== -1) {
    console.warn('duplicated color f');
  }

  cache.push(f);

  if (cache.indexOf(s) !== -1) {
    console.warn('duplicated color s');
  }

  cache.push(s);

  colors.push([f, s]);
}

export default colors;
