import React from 'react';
import PageAnimation from '../../components/PageAnimation';

export default () => {
  return (
    <PageAnimation
      title="Rockey"
      github="tuchk4/rockey"
      load={onLoad => {
        require.ensure(['./Block'], () => {
          const block = require('./Block').default;
          onLoad({ block });
        });
      }}
    />
  );
};
