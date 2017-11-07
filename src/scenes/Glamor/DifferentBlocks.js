import React from 'react';
import { css } from 'glamor';
import colors from '../../utils/colors';
import config from '../../config';
import Block from './Block';

const components = [];

const cache = new Map();
const getCSS = (isPrimary, i) => {
  const isPrimaryKey = isPrimary.toString();

  if (!cache[i]) {
    cache[i] = {};
  }

  if (!cache[i][isPrimaryKey]) {
    cache[i][isPrimaryKey] = css({
      borderColor: isPrimary ? colors[i][0] : colors[i][1],
    });
  }

  return cache[i][isPrimaryKey];
};

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const rule = css({
    border: `${size + 2}px solid #000`,
    borderRadius: `${size * 6}px`,
    '&:hover': {
      backgroundColor: 'white !important',
      borderColor: 'black !important',
      color: 'black',
    },
  });

  const component = ({ children, ...props }) => {
    const borderColorRule = getCSS(props.isPrimary, props.i);

    return (
      <Block className={`${rule} ${borderColorRule}`} {...props}>
        {children}
      </Block>
    );
  };

  components.push(component);
}

export default components;
