import React, { Component } from 'react';
import now from 'performance-now';
import config from '../config';
import ReactTooltip from 'react-tooltip';

let metrics = [];

class Perfomance extends Component {
  state = {
    renderCount: 0,
    renderTimes: [],
    time: null,
    renderTime: null,
  };

  didMountTimeEl = null;
  renderStylesTimeEl = null;

  firstDidMountTimeEl = null;
  firstRenderStylesTimeEl = null;

  constructor(props) {
    super(props);
    this.createdAt = now();
  }

  componentDidMount() {
    metrics.push({
      didMountTime: parseInt((now() - this.createdAt).toFixed(0), 10),
    });

    const last = this.container.querySelector('div:last-child');
    const height = getComputedStyle(last).height;

    if (height !== '16px') {
      this.noStylesEl.style.display = 'block';
    }

    if (!this.props.collect) {
      let avarageDidMountTime = 0;

      metrics.forEach(({ didMountTime }) => {
        avarageDidMountTime += didMountTime;
      });

      // using innerHTML to prevet re-render if use setState
      if (this.didMountTimeEl) {
        let prefix = '';

        if (metrics.length > 1) {
          prefix = 'Avarage  ';
        }

        this.didMountTimeEl.innerHTML = `${prefix} did mount: ${(avarageDidMountTime / metrics.length).toFixed(0)} ms`;
      }

      if (this.firstDidMountTimeEl && metrics.length > 1) {
        this.firstDidMountTimeEl.innerHTML = `First did mount: ${metrics[0].didMountTime} ms`;
      }

      metrics = [];
    }
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
        <div
          ref={el => (this.noStylesEl = el)}
          className="no-styles-after-render"
        >
          not all styles were injected when all components were already mounted
        </div>

        <div className="first-render time-container">
          <div
            ref={el =>
              (this.firstDidMountTimeEl = el ? el.querySelector('span') : null)}
            className="time"
            data-tip="Time between component's constructor and comopnentDidMount"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>
        </div>

        <div className="time-container">
          <div
            ref={el =>
              (this.didMountTimeEl = el ? el.querySelector('span') : null)}
            className="time"
            data-tip="Time between component's constructor and comopnentDidMount"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>
        </div>

        <div className="components" ref={el => (this.container = el)}>
          {components}
        </div>
      </div>
    );
  }
}

export default Perfomance;
