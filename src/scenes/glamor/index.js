import React from 'react';
import Page from '../../components/page';

import block from './block';
import differentBlocks from './differentBlocks';

const Glamor = () => {
  return (
    <Page
      title="Glamor"
      link="threepointone/glamor"
      component={block}
      components={differentBlocks}
    />
  );
};

export default Glamor;
