import React, { Component } from 'react';
import Box, { Center } from 'react-layout-components';
import config from '../../config';
import Button from '../Button';
import Checkbox from '../Checkbox';
import TextField from '../TextField';
import SourceLink from '../Link/SourceLink';
import './PageControls.css';

const AUTO_RENDER_COUNT = 5;

const PageControlsBlock = ({ children }) => (
  <Box row justifyContent="center">
    {children}
  </Box>
);

const PageControlsBlockFooter = ({ children }) => <Center>{children}</Center>;

const PageControlsLeftBlock = ({ children }) => (
  <div className={'page-controls-left-block'}>{children}</div>
);
const PageControlsRightBlock = ({ children }) => (
  <div className={'page-controls-right-block'}>{children}</div>
);

const PageControlsRow = ({ children }) => (
  <div className="page-controls-row">{children}</div>
);
const BlockHeader = ({ children }) => (
  <div className="page-controls-block-header">
    <span>{children}</span>
  </div>
);

const PageControlsActionRow = ({ title, children }) => (
  <PageControlsRow>
    {title && <span className="page-controls-row-action-text">{title}</span>}
    <span className="page-controls-row-action">{children}</span>
  </PageControlsRow>
);

export default class PageControls extends Component {
  render() {
    const {
      block,
      type,
      data,
      title,
      onAutoRender,
      onFormChange,
      onRenderSameComponents,
      onRenderDifferentComponents,
      onClear,
    } = this.props;

    return (
      <div className="page-controls-block">
        <PageControlsBlock>
          <PageControlsLeftBlock>
            <PageControlsActionRow title={`${config.size} same components`}>
              <SourceLink lib={'xxx'} type="Block.js" />
              <Button
                disabled={!block || type}
                onClick={onRenderSameComponents}
              >
                Render
              </Button>
            </PageControlsActionRow>

            <PageControlsActionRow
              title={`${config.size} different components`}
            >
              <SourceLink lib={'xxx'} type="DifferentBlocks.js" />

              <Button
                disabled={!block || type}
                onClick={onRenderDifferentComponents}
              >
                Render
              </Button>
            </PageControlsActionRow>

            <PageControlsActionRow
              title={`Auto render ${AUTO_RENDER_COUNT} times`}
            >
              <Button disabled={!block || type} onClick={onAutoRender}>
                Start
              </Button>
            </PageControlsActionRow>
          </PageControlsLeftBlock>
          <PageControlsRightBlock>
            <BlockHeader>Passed properties</BlockHeader>
            <PageControlsActionRow>
              <Checkbox
                disabled={!type}
                id="Primary"
                checked={data.isPrimary}
                onChange={e => onFormChange('isPrimary', e.target.checked)}
              />
              <label htmlFor="Primary">Is Primary: </label>
            </PageControlsActionRow>
            <PageControlsActionRow>
              <label htmlFor="compText">Text: </label>
              <TextField
                disabled={!type}
                id="compText"
                placeholder="Children"
                value={data.text}
                onChange={e => onFormChange('children', e.target.value)}
              />
            </PageControlsActionRow>
          </PageControlsRightBlock>
        </PageControlsBlock>

        <PageControlsBlockFooter>
          <Button disabled={!type} onClick={onClear}>
            Clear
          </Button>
        </PageControlsBlockFooter>
      </div>
    );
  }
}
