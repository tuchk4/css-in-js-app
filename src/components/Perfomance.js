import React, { Component } from 'react';
import now from 'performance-now';
import config from '../config';
import ReactTooltip from 'react-tooltip';

let metrics = [];
const RENDER_STYLES_TIMEOUT_THRESHOLD = 500;

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
    const time = (now() - this.createdAt).toFixed(0);

    // wait unitl all styles are injected (approximated time)
    setTimeout(() => {
      const didMountTime = parseInt(time, 10);
      const renderStylesTime = parseInt(
        (now() - this.createdAt - RENDER_STYLES_TIMEOUT_THRESHOLD).toFixed(0),
        10
      );

      metrics.push({
        didMountTime,
        renderStylesTime,
      });

      if (!this.props.collect) {
        let avarageDidMountTime = 0;
        let avarageRenderStylesTime = 0;

        metrics.forEach(({ didMountTime, renderStylesTime }) => {
          avarageDidMountTime += didMountTime;
          avarageRenderStylesTime += renderStylesTime;
        });

        // using innerHTML to prevet re-render if use setState
        if (this.didMountTimeEl && this.renderStylesTimeEl) {
          let prefix = '';

          if (metrics.length > 1) {
            prefix = 'Avarage  ';
          }

          this.didMountTimeEl.innerHTML = `${prefix} did mount: ${(avarageDidMountTime / metrics.length).toFixed(0)} ms`;
          this.renderStylesTimeEl.innerHTML = `${prefix} render styles: ~${(avarageRenderStylesTime / metrics.length).toFixed(0)} ms`;
        }

        if (
          this.firstDidMountTimeEl &&
          this.firstRenderStylesTimeEl &&
          metrics.length > 1
        ) {
          this.firstDidMountTimeEl.innerHTML = `First did mount: ${metrics[0].didMountTime} ms`;
          this.firstRenderStylesTimeEl.innerHTML = `First render styles: ~${metrics[0].renderStylesTime} ms`;
          this.showFirstRender = true;
        }

        console.log(this.showFirstRender);
        console.log(metrics);
        metrics = [];
      }
    }, RENDER_STYLES_TIMEOUT_THRESHOLD);
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

          <div
            ref={el =>
              (this.firstRenderStylesTimeEl = el
                ? el.querySelector('span')
                : null)}
            className="render-time"
            data-tip="~ Time when all styles are rendered"
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

          <div
            ref={el =>
              (this.renderStylesTimeEl = el ? el.querySelector('span') : null)}
            className="render-time"
            data-tip="~ Time when all styles are rendered"
          >
            <span />
            <ReactTooltip place="top" type="dark" />
          </div>
        </div>

        <div className="components">
          {components}
        </div>
      </div>
    );
  }
}

export default Perfomance;
