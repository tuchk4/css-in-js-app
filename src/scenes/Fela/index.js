import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import Page from '../../components/Page';

let renderer = null;
let mountNode = null;

export default () => {
  return (
    <Page
      title="Fela"
      github="rofrischmann/fela"
      Provider={({ children }) => {
        if (!renderer) {
          renderer = createRenderer({
            selectorPrefix: '__',
          });

          mountNode = document.createElement('style');
          document.head.appendChild(mountNode);
        }

        return (
          <Provider renderer={renderer} mountNode={mountNode}>
            {children}
          </Provider>
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
