import React from 'react';
import config from '../config';

class Perfomance extends React.Component {
  constructor(props) {
    super(props);
    this.time = Date.now();
  }

  componentDidMount() {
    this.props.onDidMount(`${(Date.now() - this.time) / 1000}sec`);
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
