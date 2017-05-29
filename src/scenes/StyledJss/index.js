import React from 'react';
import Page from '../../components/Page';

export default () => {
  return (
    <Page
      title="StyledJss"
      github="cssinjs/styled-jss"
      load={onLoad => {
        require.ensure(['./Block', './DifferentBlocks', './Probe'], () => {
          const block = require('./Block').default;
          const differentBlocks = require('./DifferentBlocks').default;
          const probe = require('./Probe').default;

          onLoad({ block, differentBlocks, probe });
        });
      }}
    />
  );
};
