import React from 'react';
import Box, { ScrollView } from 'react-layout-components';
import Perfomance from './Perfomance';
import PageLoader from './PageLoader';
import InfoPage from './InfoPage';
import FormComponent from './FormComponent';

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
        <FormComponent
          block={this.state.block}
          type={this.state.type}
          data={this.state.props}
          github={this.props.github}
          onRenderSameComponents={this.onRenderSameComponents}
          onRenderDifferentComponents={this.onRenderDifferentComponents}
          onFormChange={this.onFormChange}
          onClear={this.onClear}
          title={this.props.title}
          onAutoRender={this.onAutoRender}
          onAnimationStart={this.onAnimationStart}
        />
        <Box className="example-space">
          {this.state.block ? this.renderPage() : <PageLoader />}
        </Box>
      </ScrollView>
    );
  }
}

export default Page;
