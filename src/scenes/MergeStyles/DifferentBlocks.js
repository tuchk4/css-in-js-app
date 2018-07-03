import * as React from 'react';
import { mergeStyles } from '@uifabric/merge-styles';
import config from '../../config';
import colors from '../../utils/colors';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = props => {
    const className = mergeStyles({
      border: `${size + 2}px solid #000`,
      borderRadius: size * 6,
      borderColor: props.isPrimary ? colors[props.i][0] : colors[props.i][1],
      selectors: {
        ':hover': {
          backgroundColor: 'white !important',
          borderColor: 'black !important',
          color: 'black',
        },
      },
    });

    return <Block {...props} className={className} />;
  };

  components.push(component);
}

export default components;
