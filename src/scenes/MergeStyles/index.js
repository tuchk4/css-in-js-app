import React from 'react';
import Page from '../../components/Page';

export default () => {
  return (
    <Page
      title="MergeStyles"
      github="OfficeDev/office-ui-fabric-react/packages/merge-styles"
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
