import React from 'react';
import config from '../../config';
import { StyleSheet, css } from 'aphrodite/no-important';

import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(i / 10 % 1 * 10);

  const sheet = StyleSheet.create({
    sizedButton: {
      border: `${size + 2}px solid #000 !important`,
      borderRadius: `${size * 6}px`,
    },
  });

  const component = ({ children, ...props }) => {
    return (
      <Block className={css(sheet.sizedButton)} {...props}>{children}</Block>
    );
  };

  components.push(component);
}

export default components;
