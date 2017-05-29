import React from 'react';
import PageAnimation from '../../components/PageAnimation';

export default () => {
  return (
    <PageAnimation
      title="ReactJss"
      github="cssinjs/jss"
      load={onLoad => {
        require.ensure(['./Block'], () => {
          const block = require('./Block').default;
          onLoad({ block });
        });
      }}
    />
  );
};
