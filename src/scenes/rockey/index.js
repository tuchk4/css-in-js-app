import React from 'react';
import Page from '../../components/page';

import block from './block';
import differentBlocks from './differentBlocks';

const Rockey = () => {
  return (
    <Page
      title="Rockey"
      link="tuchk4/rockey"
      component={block}
      components={differentBlocks}
    />
  );
};

export default Rockey;
