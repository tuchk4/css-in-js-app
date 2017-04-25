import React, { Component } from 'react';
// import Perf from 'react-addons-perf';
import now from 'performance-now';
import config from '../config';

// window.Perf = Perf;

class Perfomance extends Component {
  state = {
    time: null,
  };

  constructor(props) {
    super(props);
    this.createdAt = now();
  }

  componentDidMount() {
    this.setState({
      time: (now() - this.createdAt).toFixed(0),
    });
    // this.props.onDidMount(`${ms} ms`);

    // Perf.stop();
    //
    // console.info('printInclusive');
    // Perf.printInclusive();
    //
    // console.info('printExclusive');
    // Perf.printExclusive();
    //
    // console.info('printWasted');
    // Perf.printWasted();
  }

  render() {
    const { props } = this.props;
    const total = this.props.total || config.size;

    let components = [];

    if (this.props.type === 'SAME_COMOPNENT') {
      const Component = this.props.component;

      for (let i = 0; i < total; i++) {
        components.push(<Component i={i} key={i} {...props} />);
      }
    } else if (this.props.type === 'DIFFERENT_COMOPNENTS') {
      components = this.props.components.map((Component, i) => {
        return <Component i={i} key={i} {...props} />;
      });
    } else {
      return 'Ooops';
    }

    return (
      <div>
        {this.state.time &&
          <p className="time">
            {this.state.time} ms
          </p>}

        {components}
      </div>
    );
  }
}

export default Perfomance;
