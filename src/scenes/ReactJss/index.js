import React from 'react';
import { JssProvider } from 'react-jss';
import Page from '../../components/Page';
import { jss } from './jss';

export default () => {
  return (
    <Page
      title="ReactJss"
      github="cssinjs/jss"
      Provider={({ children }) => {
        return <JssProvider jss={jss}>{children}</JssProvider>;
      }}
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
