import React from 'react';
import Page from '../../components/page';

import block from './block'
import differentBlocks from './differentBlocks'


const Aphrodite = () => {
  return <Page
    title="Aphrodite"
    link="Khan/aphrodite"
    component={block}
    components={differentBlocks}/>;
};

export default Aphrodite;
