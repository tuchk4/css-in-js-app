import React from 'react';
import './Button.css';

export default ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
