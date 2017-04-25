import React from 'react';
import Page from '../../components/Page';

export default () => {
  return (
    <Page
      title="styled-jss"
      github="cssinjs/styled-jss"
      load={onLoad => {
        require.ensure(['./Block', './DifferentBlocks'], () => {
          const block = require('./Block').default;
          const differentBlocks = require('./DifferentBlocks').default;

          onLoad({ block, differentBlocks });
        });
      }}
    />
  );
};
