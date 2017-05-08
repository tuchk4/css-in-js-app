import React, { Component } from 'react';
// import Perf from 'react-addons-perf';
import now from 'performance-now';
import config from '../config';
import ReactTooltip from 'react-tooltip';
// window.Perf = Perf;

class Perfomance extends Component {
  state = {
    time: null,
    renderTime: null,
  };

  timeEl = null;
  renderTimeEl = null;

  constructor(props) {
    super(props);
    this.createdAt = now();
  }

  componentDidMount() {
    const time = (now() - this.createdAt).toFixed(0);

    setTimeout(() => {
      // using innerHTML to prevet re-render if use setState
      if (this.timeEl && this.renderTimeEl) {
        this.timeEl.innerHTML = `componentDidMount: ${time} ms`;
        this.renderTimeEl.innerHTML = `Render time: ~${(now() - this.createdAt).toFixed(0)} ms`;
      }
    });
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
        <div className="time-container">

          <div
            ref={el => (this.timeEl = el ? el.querySelector('span') : null)}
            className="time"
            data-tip="Time between component's constructor and comopnentDidMount"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>

          <div
            ref={el =>
              (this.renderTimeEl = el ? el.querySelector('span') : null)}
            className="render-time"
            data-tip="~ Time when all styles are rendered"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>

        </div>

        {components}
      </div>
    );
  }
}

export default Perfomance;
