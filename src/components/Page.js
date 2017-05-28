import React from 'react';
import Box, { ScrollView } from 'react-layout-components';
import Perfomance from './Perfomance';

const AUTO_RENDER_COUNT = 5;

class Page extends React.Component {
  state = {
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

  componentDidMount() {
    this.props.load(({ block, differentBlocks }) => {
      this.setState({ block, differentBlocks });
    });
  }

  onRenderSameComponents = () => {
    this.setState({
      type: 'SAME_COMOPNENT',
      auto: false,
    });
  };

  onRenderDifferentComponents = () => {
    this.setState({
      type: 'DIFFERENT_COMOPNENTS',
      auto: false,
    });
  };

  onAutoRender = () => {
    this.setState({
      type: 'SAME_COMOPNENT',
      auto: true,
      counter: ++this.state.counter,
    });
  };

  onClear = () => {
    this.setState({
      type: null,
      auto: false,
    });
  };

  componentDidUpdate() {
    if (this.state.auto) {
      if (this.state.counter !== AUTO_RENDER_COUNT) {
        setTimeout(() => {
          this.onClear();
          setTimeout(() => {
            this.onAutoRender();
          });
        });
      } else {
        this.setState({
          counter: 0,
          auto: false,
        });
      }
    }
  }

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
        <Box>
          Component props:
        </Box>
        <Box>
          <input
            className="Checkbox"
            id="Primary"
            type="checkbox"
            checked={this.state.props.isPrimary}
            onChange={e => this.onFormChange('isPrimary', e.target.checked)}
          />
          <label className="CheckboxLabel" htmlFor="Primary">Primary</label>
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

  renderPerf() {}

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
            NOTE that this is not the real benchmark but it shows the differents between CSS in JS liraries and approaches under the same conditions. In this app the accent was made on dynamic CSS that depends on component props.
          </p>
          <p className="highlite">
            All libraries are used with React. So resulted time also includes React render cycle.
          </p>
          <p>
            Each library has different features and possibilities.
          </p>
          <p>
            For example fela and styletron uses
            {' '}
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
            styled-components and rockey uses
            {' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
              target="_blank"
              rel="noopener noreferrer"
            >
              template literals
            </a>
            {' '}
            to define CSS.
          </p>
          <p className="highlite">
            If render components again after
            {' '}
            <i>"CLEAR"</i>
            {' '}
            and resulted time is lesser this means that library uses cached styles.
          </p>
          <p className="highlite">
            For example try styled-components. Second render is faster in
            {' '}
            <b>~25</b>
            {' '}
            times.
          </p>
        </div>
      );
    }

    const Provider = this.props.Provider;

    if (this.props.Provider) {
      return (
        <Provider>
          <Perfomance
            type={this.state.type}
            collect={this.state.auto}
            component={this.state.block}
            components={this.state.differentBlocks}
            props={this.state.props}
          />
        </Provider>
      );
    } else {
      return (
        <Perfomance
          type={this.state.type}
          collect={this.state.auto}
          component={this.state.block}
          components={this.state.differentBlocks}
          props={this.state.props}
        />
      );
    }
  }
  renderLoader() {
    return (
      <div className="loading">
        <p>
          Loading...
        </p>
        <p>
          Assynchronous bundle downloading and its initialization.
        </p>
      </div>
    );
  }

  render() {
    return (
      <ScrollView width="100%" flex={1}>
        <Box center className="controlls-space">
          <button
            disabled={
              !this.state.block || this.state.type || this.state.counter !== 0
            }
            onClick={this.onRenderSameComponents}
          >
            Render 1000 same components
          </button>

          <a
            href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${this.props.title}/Block.js`}
            target="blank"
            className="soruce-link"
          >
            <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
          </a>

          <button
            disabled={
              !this.state.block || this.state.type || this.state.counter !== 0
            }
            onClick={this.onRenderDifferentComponents}
          >
            Render 1000 different components
          </button>

          <a
            href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${this.props.title}/DifferentBlocks.js`}
            target="blank"
            className="soruce-link"
          >
            <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
          </a>

          <button
            disabled={
              !this.state.block || this.state.type || this.state.counter !== 0
            }
            onClick={this.onAutoRender}
          >
            Render {AUTO_RENDER_COUNT} times
          </button>

          <button
            disabled={!this.state.type || this.state.counter !== 0}
            onClick={this.onClear}
          >
            Clear
          </button>
        </Box>
        <Box center className="gh-link-block">
          {this.props.github &&
            <a
              target="blank"
              className="gh-link"
              href={`https://github.com/${this.props.github}`}
            >
              gh: {this.props.github}
            </a>}
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
