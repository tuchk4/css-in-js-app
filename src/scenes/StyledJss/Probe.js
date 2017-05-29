import { Styled } from 'styled-jss';

const styled = Styled({
  '@keyframes styled-jss-probe-animation': {
    from: {
      color: 'red',
    },

    to: {
      color: 'blue',
    },
  },
});

const Probe = styled('div')({
  animation: '1s styled-jss-probe-animation',
});

export default Probe;
