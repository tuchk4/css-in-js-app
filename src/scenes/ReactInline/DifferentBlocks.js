import React from 'react';
import config from '../../config';

import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const component = props => {
    return (
      <Block
        i={i}
        isPrimary={props.isPrimary}
        style={{
          border: `${size + 2}px solid #000`,
          borderRadius: `${size * 6}px`,
        }}
      >
        {props.children}
      </Block>
    );
  };

  components.push(component);
}

export default components;
