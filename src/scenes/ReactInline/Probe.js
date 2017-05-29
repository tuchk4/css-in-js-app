import React from 'react';

const Probe = ({ onAnimationStart }) => {
  return (
    <div
      onAnimationStart={onAnimationStart}
      style={{ animation: '1s global-probe' }}
    />
  );
};

export default Probe;
