import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import monolithic from 'fela-monolithic';
import Page from '../../components/Page';

let renderer = null;
let mountNode = null;

export default () => {
  if (!renderer) {
    renderer = createRenderer({
      enhancers: [monolithic()],
      selectorPrefix: 'cij_',
    });

    mountNode = document.createElement('style');
    document.head.appendChild(mountNode);
  }

  return (
    <Provider renderer={renderer} mountNode={mountNode}>
      <Page
        title="Fela Monolithic"
        github="rofrischmann/fela"
        load={onLoad => {
          require.ensure(['./Block', './DifferentBlocks'], () => {
            const block = require('./Block').default;
            const differentBlocks = require('./DifferentBlocks').default;

            onLoad({ block, differentBlocks });
          });
        }}
      />
    </Provider>
  );
};
