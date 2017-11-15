import React, { Component } from 'react';
import Box from 'react-layout-components';
import config from '../config';
import PageControls from './PageControls';
import GithubLibLink from './GithubLibLink';
import ButtonComponent from './ButtonComponent';
import LinkComponent from './LinkComponent';

const AUTO_RENDER_COUNT = 5;

export default class FormComponent extends Component {
  render() {
    const {
      block,
      type,
      data,
      github,
      title,
      onAutoRender,
      onFormChange,
      onRenderSameComponents,
      onRenderDifferentComponents,
      onClear,
    } = this.props;
    return (
      <Box wrap justifyContent="center" className="controlls-space">
        {github && <GithubLibLink github={github} />}
        <div>
          <div className="controlls-item controlls-item--alt">
            <span className="controlls-item-text">
              <span>Render </span>
              <span>{config.size}</span>
              <span> same components. </span>
            </span>
            <span className="controlls-item">
              <ButtonComponent
                disabled={!block || type}
                click={onRenderSameComponents}
                text="ok"
              />
              <LinkComponent title={title} item="Block.js" />
            </span>
          </div>
          <div className="controlls-item">
            <span className="controlls-item-text">
              <span>Render </span>
              <span>{config.size}</span>
              <span> different components. </span>
            </span>
            <span className="controlls-item">
              <ButtonComponent
                disabled={!block || type}
                click={onRenderDifferentComponents}
                text="ok"
              />
              <LinkComponent title={title} item="DifferentBlocks.js" />
            </span>
          </div>
          <div className="controlls-item">
            <span className="controlls-item-text">
              <span>Render </span>
              {AUTO_RENDER_COUNT}
              <span> times</span>
            </span>
            <ButtonComponent
              disabled={!block || type}
              click={onAutoRender}
              text="ok"
            />
          </div>
        </div>
        <div>
          <PageControls
            disabled={!type}
            onChange={onFormChange}
            values={{
              text: data.children,
              isPrimary: data.isPrimary,
            }}
          />
        </div>
        <Box center width="100%">
          <div className="button-holder">
            <ButtonComponent disabled={!type} click={onClear} text="Clear" />
          </div>
        </Box>
      </Box>
    );
  }
}
