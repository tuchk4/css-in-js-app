import React from 'react';

// Styletron does not support keyframes?
const Probe = ({ onAnimationStart }) => {
  return (
    <div
      onAnimationStart={onAnimationStart}
      style={{ animation: '1s global-probe' }}
    />
  );
};

export default Probe;
