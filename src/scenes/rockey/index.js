import React from 'react';
import Page from '../../components/page';


import rockey from 'rockey-react';
import look from 'rockey-react/look';

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


const { Layer, PrimaryLayer } = look.div`
  Layer {
    padding: 10px;
    margin: 10px;
    border: 1px solid #cc0000;
  }

  PrimaryLayer {
    background: rgba(0,0,255,.1);
    border-width: 5px;

    Button {
      font-size: 20px;
    }
  }
`;

const Button = rockey.button('Button')`
  font-weight: bold;
  margin: 5px;
`;
const MyButton = Button('MyButton')`
  color: blue;
`;

export default () => {
  return (
    <div>
      <Layer>
        <Button>Button</Button>
        <MyButton>MyButton</MyButton>
      </Layer>

      <PrimaryLayer>
        <Button>Button</Button>
        <MyButton>MyButton</MyButton>
      </PrimaryLayer>
    </div>
  )
};
