import React from 'react';
import config from '../../config';
import colors from '../../utils/colors';
import Block from './Block';

const components = [];

for (let i = 0; i < config.size; i++) {
  let size = Math.round(((i / 10) % 1) * 10);

  const component = class DifferentBlcok extends React.Component {
    state = {
      hoverStyles: {},
    };

    onMouseOver = () => {
      this.setState({
        hoverStyles: {
          backgroundColor: 'white',
          borderColor: 'black',
          color: 'black',
        },
      });
    };

    onMouseOut = () => {
      this.setState({
        hoverStyles: {},
      });
    };

    render() {
      const props = this.props;
      return (
        <Block
          i={i}
          isPrimary={props.isPrimary}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          style={{
            border: `${size + 2}px solid #000`,
            borderRadius: `${size * 6}px`,
            borderColor: props.isPrimary
              ? colors[props.i][0]
              : colors[props.i][1],
            ...this.state.hoverStyles,
          }}
        >
          {props.children}
        </Block>
      );
    }
  };

  components.push(component);
}

export default components;
