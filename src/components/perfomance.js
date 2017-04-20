import React, { Component } from 'react';
import now from 'performance-now';
import config from '../config';


class Perfomance extends Component {

  constructor(props) {
    super(props);
    this.createdAt = now();
  }

  componentDidMount() {
    const ms = (now() - this.createdAt).toFixed(0);
    this.props.onDidMount(`${ms} ms`);
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

    return <div>{components}</div>;
  }
}

export default Perfomance;
