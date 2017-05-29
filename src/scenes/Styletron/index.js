import React from 'react';
import { StyletronProvider } from 'styletron-react';
import Styletron from 'styletron-client';

import Page from '../../components/Page';

let renderer = false;
let styletron = null;

export default () => {
  return (
    <Page
      title="Styletron"
      github="rtsao/styletron"
      Provider={({ children }) => {
        if (!renderer) {
          const styleSheet = document.createElement('style');
          document.head.appendChild(styleSheet);
          styletron = new Styletron([styleSheet], {
            prefix: '_',
          });

          renderer = true;
        }

        return (
          <StyletronProvider styletron={styletron}>
            {children}
          </StyletronProvider>
        );
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
