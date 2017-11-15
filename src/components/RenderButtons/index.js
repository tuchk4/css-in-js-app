import React from 'react';
import Box from 'react-layout-components';

const AUTO_RENDER_COUNT = 5;

export default ({}) => (
  <Box center className="controlls-space">
    <div>
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
);
