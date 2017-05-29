import { createComponent } from 'react-fela';
import { createRenderer } from 'fela';
import { render } from 'fela-dom';

const renderer = createRenderer({
  selectorPrefix: '__',
});

const mountNode = document.createElement('style');
document.head.appendChild(mountNode);

render(renderer, mountNode);

const keyframeName = renderer.renderKeyframe(
  props => ({
    from: {
      color: 'red',
    },

    to: {
      color: 'blue',
    },
  }),
  {}
);

export default createComponent(
  props => ({
    width: '20px',
    height: '20px',
    animation: `${keyframeName} 1s`,
  }),
  'div',
  ['onAnimationStart']
);
