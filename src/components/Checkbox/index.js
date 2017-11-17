import React from 'react';
import './Checkbox.css';

export default ({ ...props }) => (
  <input className="checkbox" type={'checkbox'} {...props} />
);
