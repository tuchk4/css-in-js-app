import React from 'react';
import Box, { ScrollView } from 'react-layout-components';
import config from '../config';
import Perfomance from './Perfomance';

const AUTO_RENDER_COUNT = 5;

class Page extends React.Component {
  state = {
    action: null,
    type: null,
    auto: false,
    counter: 0,
    time: null,
    props: {
      children: 'Yo',
      isPrimary: false,
    },
    block: null,
    differentBlocks: null,
  };

  input = null;
  checkbox = null;

  clearButton = null;
  renderButton = null;

  componentDidMount() {
    this.props.load(({ block, differentBlocks, probe }) => {
      this.setState({ block, differentBlocks, probe });
    });
  }

  onRenderSameComponents = () => {
    this.setState({
      type: 'SAME_COMOPNENT',
      counter: this.state.auto ? ++this.state.counter : this.state.counter,
      auto: this.state.auto && this.state.counter !== AUTO_RENDER_COUNT,
    });
  };

  onRenderDifferentComponents = () => {
    this.setState({
      type: 'DIFFERENT_COMOPNENTS',
    });
  };

  onAutoRender = () => {
    this.setState({
      type: 'SAME_COMOPNENT',
      auto: true,
    });
  };

  onClear = () => {
    this.setState({
      type: null,
    });
  };

  onAnimationStart = () => {
    if (this.state.auto) {
      if (this.state.counter !== AUTO_RENDER_COUNT) {
        setTimeout(() => {
          this.clearButton.click();

          setTimeout(() => {
            this.renderButton.click();
          }, 10);
        }, 10);
      } else {
        this.setState({
          counter: 0,
          auto: false,
        });
      }
    }
  };

  onPerfomanceDidMount = time => {
    this.setState({
      time,
    });
  };

  onFormChange = (field, value) => {
    this.setState({
      props: {
        ...this.state.props,
        [field]: value,
      },
    });
  };

  renderControlls() {
    return (
      <Box className="controlls-space controlls-inputs">
        <Box>Component props:</Box>
        <Box>
          <input
            className="Checkbox"
            id="Primary"
            type="checkbox"
            checked={this.state.props.isPrimary}
            onChange={e => this.onFormChange('isPrimary', e.target.checked)}
          />
          <label className="CheckboxLabel" htmlFor="Primary">
            Primary
          </label>
        </Box>
        <Box>
          <input
            type="text"
            placeholder="Children"
            value={this.state.props.children}
            onChange={e => this.onFormChange('children', e.target.value)}
          />
        </Box>
      </Box>
    );
  }

  renderPage() {
    if (!this.state.type) {
      return (
        <div className="info-block">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
            href="https://github.com/tuchk4/css-in-js-app"
          >
            github.com/tuchk4/css-in-js-app
          </a>
          <p>
            NOTE that this is not the real benchmark but it shows the differents
            between CSS in JS libraries and approaches under the same
            conditions. In this app the accent was made on dynamic CSS that
            depends on component props.
          </p>
          <p className="highlite">
            All libraries are used with React. So resulted time also includes
            React render cycle.
          </p>
          <p>Each library has different features and possibilities.</p>
          <p>
            For example fela and styletron uses{' '}
            <a
              href="https://ryantsao.com/blog/virtual-css-with-styletron"
              target="_blank"
              rel="noopener noreferrer"
            >
              atomic css design
            </a>
            .
          </p>
          <p>
            styled-components and rockey uses{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
              target="_blank"
              rel="noopener noreferrer"
            >
              template literals
            </a>{' '}
            to define CSS.
          </p>
          <p className="highlite">
            If render components again after <i>"CLEAR"</i> and resulted time is
            lesser this means that library uses cached styles.
          </p>
          <p className="highlite">
            For example try styled-components. Second render is faster in{' '}
            <b>~25</b> times.
          </p>
        </div>
      );
    }

    const Provider = this.props.Provider;

    if (this.props.Provider) {
      return (
        <Provider>
          <Perfomance
            onAnimationStart={this.onAnimationStart}
            type={this.state.type}
            collect={this.state.auto}
            component={this.state.block}
            components={this.state.differentBlocks}
            probe={this.state.probe}
            props={this.state.props}
          />
        </Provider>
      );
    } else {
      return (
        <Perfomance
          onAnimationStart={this.onAnimationStart}
          type={this.state.type}
          collect={this.state.auto}
          component={this.state.block}
          components={this.state.differentBlocks}
          probe={this.state.probe}
          props={this.state.props}
        />
      );
    }
  }
  renderLoader() {
    return (
      <div className="loading">
        <p>Loading...</p>
        <p>Assynchronous bundle downloading and its initialization.</p>
      </div>
    );
  }

  render() {
    return (
      <ScrollView width="100%" flex={1}>
        <Box center className="controlls-space">
          <button
            ref={el => (this.renderButton = el)}
            disabled={!this.state.block || this.state.type}
            onClick={this.onRenderSameComponents}
          >
            Render {config.size} same components
          </button>

          <a
            href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${
              this.props.title
            }/Block.js`}
            target="blank"
            className="soruce-link"
          >
            <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
          </a>

          <button
            disabled={!this.state.block || this.state.type}
            onClick={this.onRenderDifferentComponents}
          >
            Render {config.size} different components
          </button>

          <a
            href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${
              this.props.title
            }/DifferentBlocks.js`}
            target="blank"
            className="soruce-link"
          >
            <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
          </a>

          <button
            disabled={!this.state.block || this.state.type}
            onClick={this.onAutoRender}
          >
            Render {AUTO_RENDER_COUNT} times
          </button>

          <button
            ref={el => (this.clearButton = el)}
            disabled={!this.state.type}
            onClick={this.onClear}
          >
            Clear
          </button>
        </Box>
        <Box center className="gh-link-block">
          {this.props.github && (
            <a
              target="blank"
              className="gh-link"
              href={`https://github.com/${this.props.github}`}
            >
              gh: {this.props.github}
            </a>
          )}
        </Box>

        {this.state.type && this.renderControlls()}

        <Box className="example-space">
          {this.state.block ? this.renderPage() : this.renderLoader()}
        </Box>
      </ScrollView>
    );
  }
}

export default Page;
