import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

import Page from '../../components/page';

let renderer = null;
let mountNode = null;

class Fela extends React.Component {
  state = {
    block: null,
    differentBlocks: null,
  }

  componentDidMount() {
    require.ensure(['./block', './differentBlocks'], () => {
      const block = require('./block').default;
      const differentBlocks = require('./differentBlocks').default;

      if (!renderer) {
        renderer = createRenderer();
        mountNode = document.createElement('style');
        document.head.appendChild(mountNode);
      }

      this.setState({ block, differentBlocks });
    });
  }

  render() {
    if (!this.state.block || !this.state.differentBlocks) {
      return (
        <div>
          <p>
            Loading...
          </p>
          <p>
            This is not an assynchronous bundle downloading. But this is component module initialization.
          </p>
          <p>
            Genereting css classNames that will be used when rendering.
          </p>
        </div>
      );
    }

    return (
      <Provider renderer={renderer} mountNode={mountNode}>
        <Page
          title="Fela"
          link="rofrischmann/fela"
          component={this.state.block}
          components={this.state.differentBlocks}
        />
      </Provider>
    );
  }
};

export default Fela;
