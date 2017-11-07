import React, { Component } from 'react';
import now from 'performance-now';
import config from '../config';
import ReactTooltip from 'react-tooltip';

let metrics = {
  onAnimationStart: [],
  didMount: [],
};

class Perfomance extends Component {
  state = {
    renderCount: 0,
    renderTimes: [],
    time: null,
    renderTime: null,
  };

  animationEl = null;
  didMountEl = null;

  firstAnimationEl = null;
  firstDidMountEl = null;

  noStylesEl = null;

  constructor(props) {
    super(props);
    this.createdAt = now();
  }

  onAnimationStart() {
    this.props.onAnimationStart();

    metrics.onAnimationStart.push(
      parseInt((now() - this.createdAt).toFixed(0), 10)
    );

    if (!this.props.collect) {
      let animationAverage = 0;
      let didMountverage = 0;

      metrics.onAnimationStart.forEach(t => {
        animationAverage += t;
      });

      metrics.didMount.forEach(t => {
        didMountverage += t;
      });

      // using innerHTML to prevet re-render if use setState
      if (this.animationEl) {
        let prefix = '';

        if (metrics.length > 1) {
          prefix = 'Avarage  ';
        }

        const size = metrics.didMount.length;

        this.didMountEl.innerHTML = `${prefix} did mount: ${(
          didMountverage / size
        ).toFixed(0)} ms`;
        this.animationEl.innerHTML = `${prefix} total: ${(
          animationAverage / size
        ).toFixed(0)} ms`;
      }

      if (this.firstDidMountEl && metrics.onAnimationStart.length > 1) {
        this.firstDidMountEl.innerHTML = `First did mount: ${
          metrics.didMount[0]
        } ms`;
        this.firstAnimationEl.innerHTML = `First total: ${
          metrics.onAnimationStart[0]
        } ms`;
      }

      metrics = {
        didMount: [],
        onAnimationStart: [],
      };
    }
  }

  componentDidMount() {
    metrics.didMount.push(parseInt((now() - this.createdAt).toFixed(0), 10));

    const children = this.container.querySelectorAll('div');
    // last is s Probe component
    const beforeLast = children[children.length - 2];

    const height = getComputedStyle(beforeLast).height;

    if (height !== '16px') {
      this.noStylesEl.style.display = 'block';
    }

    // this.onAnimationStart();
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
              (this.firstDidMountEl = el ? el.querySelector('span') : null)
            }
            className="time"
            data-tip="Time between component's constructor and comopnentDidMount"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>

          <div
            ref={el =>
              (this.firstAnimationEl = el ? el.querySelector('span') : null)
            }
            className="time render-time"
            data-tip="Time when all styles were rendered"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>
        </div>

        <div className="time-container">
          <div
            ref={el => (this.didMountEl = el ? el.querySelector('span') : null)}
            className="time"
            data-tip="Time between component's constructor and comopnentDidMount"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>

          <div
            ref={el =>
              (this.animationEl = el ? el.querySelector('span') : null)
            }
            className="time render-time"
            data-tip="Time when all styles were rendered"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>
        </div>

        <div className="components" ref={el => (this.container = el)}>
          {components}
          {React.createElement(this.props.probe, {
            onAnimationStart: () => {
              this.onAnimationStart();
            },
          })}
        </div>
      </div>
    );
  }
}

export default Perfomance;
