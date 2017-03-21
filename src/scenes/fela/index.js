import React from 'react';

import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

import Page from '../../components/page';

import block from './block';
import differentBlocks from './differentBlocks';

let renderer = null;

const Fela = () => {
  let mountNode = null;

  if (!renderer) {
    renderer = createRenderer();
    mountNode = document.createElement('style');
    document.head.appendChild(mountNode);
  }

  return (
    <Provider renderer={renderer} mountNode={mountNode}>
      <Page
        title="Fela"
        link="rofrischmann/fela"
        component={block}
        components={differentBlocks}
      />
    </Provider>
  );
};

export default Fela;
