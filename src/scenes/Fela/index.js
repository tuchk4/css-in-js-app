import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import FPV from 'fela-plugin-validator';
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
            selectorPrefix: 'cij_',
            plugins: [FPV()],
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
        require.ensure(['./Block', './DifferentBlocks'], () => {
          const block = require('./Block').default;
          const differentBlocks = require('./DifferentBlocks').default;

          onLoad({ block, differentBlocks });
        });
      }}
    />
  );
};
