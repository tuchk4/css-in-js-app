import rockey from 'rockey-react';

export default rockey.div`
  @keyframes rockey-probe-animation {
    from {
      color: red;
    }

    to {
      color: blue;
    }
  }

  animation: 1s rockey-probe-animation;
`;
