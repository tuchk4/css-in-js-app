import React from 'react';
import { css } from 'glamor';

import config from '../../config';
import Block  from './block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(( (i / 10) % 1) *10 );

  const rule = css({
    border: `${size + 2}px solid #000`,
    borderRadius: `${size * 6}px`
  });

  const component = ({classes, children, ...props}) => {
    return <Block className={rule.toString()} {...props}>{children}</Block>
  };

  components.push(component);
}


export default components;
