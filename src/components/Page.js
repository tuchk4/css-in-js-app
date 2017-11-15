import React from 'react';
import Box, { ScrollView } from 'react-layout-components';
import config from '../config';
import Perfomance from './Perfomance';
import PageLoader from './PageLoader';
import PageControls from './PageControls';
import InfoPage from './InfoPage';
import GithubLibLink from './GithubLibLink';

const AUTO_RENDER_COUNT = 5;

const TYPE_SAME_COMPONENT = 'SAME_COMPONENT';
const TYPE_DIFFERENT_COMPONENTS = 'DIFFERENT_COMPONENTS';

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

  renderPage() {
    if (!this.state.type) {
      return <InfoPage />;
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

  render() {
    return (
      <ScrollView width="100%" flex={1}>
        <Box center className="controlls-space">
          <div>
            {this.props.github && <GithubLibLink github={this.props.github} />}

            <div>
              <span>Render </span>
              <span>{config.size}</span>
              <span className="controlls-item">
                <button
                  ref={el => (this.renderButton = el)}
                  disabled={!this.state.block || this.state.type}
                  onClick={this.onRenderSameComponents}
                >
                  same
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
              </span>
              <span> or </span>
              <span className="controlls-item">
                <button
                  disabled={!this.state.block || this.state.type}
                  onClick={this.onRenderDifferentComponents}
                >
                  different
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
              </span>
              <span>components. </span>
              <span className="controlls-item">
                <span>Render </span>
                {AUTO_RENDER_COUNT}
                <span> times</span>

                <button
                  disabled={!this.state.block || this.state.type}
                  onClick={this.onAutoRender}
                >
                  ok
                </button>
                <button
                  ref={el => (this.clearButton = el)}
                  disabled={!this.state.type}
                  onClick={this.onClear}
                >
                  Clear
                </button>
              </span>
            </div>
          </div>
        </Box>

        {this.state.type && (
          <PageControls
            onChange={this.onFormChange}
            values={{
              text: this.state.props.children,
              isPrimary: this.state.props.isPrimary,
            }}
          />
        )}

        <Box className="example-space">
          {this.state.block ? this.renderPage() : <PageLoader />}
        </Box>
      </ScrollView>
    );
  }
}

export default Page;
