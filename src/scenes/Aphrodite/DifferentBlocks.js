import React from 'react';
import colors from '../../utils/colors';
import config from '../../config';
import { StyleSheet, css } from 'aphrodite/no-important';

import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const sheet = StyleSheet.create({
    block: {
      border: `${size + 2}px solid #000 !important`,
      borderRadius: `${size * 6}px`,
    },
  });

  const component = ({ children, ...props }) => {
    const dynamicStyles = {
      block: {
        borderColor: props.isPrimary ? colors[props.i][0] : colors[props.i][1],
        '&:hover': {
          backgroundColor: 'white !important',
          borderColor: 'black !important',
          color: 'black',
        },
      },
    };

    const dynamicSheet = StyleSheet.create(dynamicStyles);

    const classlList = css(sheet.block, dynamicSheet.block);
    return (
      <Block className={classlList} {...props}>
        {children}
      </Block>
    );
  };

  components.push(component);
}

export default components;
