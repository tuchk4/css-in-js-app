import React from 'react';
import now from 'performance-now';
import Box, { ScrollView } from 'react-layout-components';

class PageAnimation extends React.Component {
  state = {
    block: null,
    counter: 0,
    time: null,
    props: {
      children: 'Yo',
      isPrimary: false,
    },
    top: 0,
    left: 0,
  };

  constructor(...args) {
    super(...args);

    this.createdAt = now();
  }

  componentDidMount() {
    this.props.load(({ block }) => {
      this.setState({ block });
    });

    this.update();
  }

  update() {
    if (this.state.counter === 1000) {
      this.setState({
        time: (now() - this.createdAt).toFixed(0),
      });

      return;
    }

    let top = this.state.top;
    let left = this.state.left;

    if (top === 100) {
      top = 0;
      left += 5 * parseInt(this.state.counter / 50, 10);
    } else {
      top++;
    }

    this.setState(
      {
        left,
        top,
        counter: this.state.counter + 1,
      },
      () => {
        setTimeout(() => {
          this.update();
        }, 1);
      }
    );
  }

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

  renderPage() {
    const Provider = this.props.Provider;
    const Block = this.state.block;

    if (this.props.Provider) {
      return (
        <Provider>
          <Block
            top={this.state.top}
            left={this.state.left}
            {...this.state.props}
          />
        </Provider>
      );
    } else {
      return (
        <Block
          top={this.state.top}
          left={this.state.left}
          {...this.state.props}
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

        {this.state.time &&
          <div className="time-container">
            <div className="time render-time">
              {this.state.time}ms
            </div>
          </div>}

        <Box className="example-space animation-scene">
          {this.state.block ? this.renderPage() : this.renderLoader()}
        </Box>
      </ScrollView>
    );
  }
}

export default PageAnimation;
