import React from 'react';
import Page from '../../components/page';

import block from './block';
import differentBlocks from './differentBlocks';

const JSS = () => {
  return (
    <Page
      title="JSS"
      link="cssinjs/jss"
      component={block}
      components={differentBlocks}
    />
  );
};

export default JSS;
