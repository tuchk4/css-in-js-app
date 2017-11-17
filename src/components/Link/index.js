import React from 'react';
import './Link.css';

export default ({ href, children, ...props }) => {
  return (
    <a href={href} className="link" {...props}>
      {children}
    </a>
  );
};
