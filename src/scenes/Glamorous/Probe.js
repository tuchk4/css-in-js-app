import glamorous from 'glamorous';
import { css } from 'glamor';

let keyframes = css.keyframes({
  from: {
    color: 'red',
  },

  to: {
    color: 'blue',
  },
});

export default glamorous.div({
  animation: `2s ${keyframes}`,
});
