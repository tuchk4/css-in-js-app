import React from 'react';
import Page from '../../components/Page';

export default () => {
  return (
    <Page
      title="Rockey"
      github="tuchk4/rockey"
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
