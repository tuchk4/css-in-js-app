import React from 'react';
import Page from '../../components/page';

import block from './block'
import differentBlocks from './differentBlocks'


const StyledComponents = () => {
  return <Page
    title="styled-components"
    link="styled-components/styled-components"
    component={block}
    components={differentBlocks}/>;
};

export default StyledComponents;
