import React from 'react';
import Page from '../../components/page';

class Rockey extends React.Component {
  state = {
    block: null,
    differentBlocks: null,
  }

  componentDidMount() {
    require.ensure(['./block', './differentBlocks'], () => {
      const block = require('./block').default;
      const differentBlocks = require('./differentBlocks').default;

      this.setState({ block, differentBlocks });
    });
  }

  render() {
    if (!this.state.block || !this.state.differentBlocks) {
      return (
        <div>
          <p>
            Loading Rockey bundle...
          </p>
          <p>
            Assynchronous bundle downloading and its initialization.
          </p>
        </div>
      );
    }

    return (
      <Page
        title="Rockey"
        link="tuchk4/rockey"
        component={this.state.block}
        components={this.state.differentBlocks}
      />
    );
  }
};

export default Rockey;
