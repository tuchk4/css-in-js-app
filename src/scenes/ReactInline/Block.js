import React from 'react';
import colors from '../../utils/colors';

export default class Block extends React.Component {
  state = {
    hoverStyles: {},
  };

  onMouseOver = () => {
    this.props.onMouseOver();

    this.setState({
      hoverStyles: {
        backgroundColor: 'black',
        color: 'white',
      },
    });
  };

  onMouseOut = () => {
    this.props.onMouseOut();

    this.setState({
      hoverStyles: {},
    });
  };

  render() {
    const props = this.props;

    return (
      <div
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        style={{
          minWidth: '16px',
          height: '16px',
          display: 'inline-block',
          textAlign: 'center',
          padding: '15px',
          border: 'none',
          fontWeight: 'bold',
          backgroundColor: props.isPrimary
            ? colors[props.i][1]
            : colors[props.i][0],
          ...this.state.hoverStyles,
          ...props.style,
        }}
      >
        {props.children}
      </div>
    );
  }
}
