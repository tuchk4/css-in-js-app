import React from 'react';

export default ({ click, text, disabled }) => {
  return (
    <button
      ref={el => (this.renderButton = el)}
      disabled={disabled}
      onClick={click}
    >
      {text}
    </button>
  );
};
