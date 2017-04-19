import React from 'react';
import { Link } from 'react-router-dom';

import Perfomance from './perfomance';

class Page extends React.Component {
  state = {
    type: null,
    time: null,
    props: {
      children: 'Yo',
      isPrimary: false,
    },
  };

  input = null;
  checkbox = null;

  onRenderSameComponents = () => {
    this.setState({
      type: 'SAME_COMOPNENT',
    });
  };

  onRenderDifferentComponents = () => {
    this.setState({
      type: 'DIFFERENT_COMOPNENTS',
    });
  };

  onClear = () => {
    this.setState({
      type: null,
      time: null,
    });
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

  render() {
    const getLinkClassName = title =>
      title === this.props.title ? 'active' : null;

    return (
      <div className="App">
        <div className="App-header">
          <Link className={getLinkClassName('Rockey')} to="/Rockey">
            Rockey
          </Link>
          <Link className={getLinkClassName('Aphrodite')} to="/Aphrodite">
            Aphrodite
          </Link>
          <Link className={getLinkClassName('Fela')} to="/Fela">Fela</Link>
          <Link className={getLinkClassName('Glamor')} to="Glamor">Glamor</Link>
          <Link className={getLinkClassName('JSS')} to="JSS">JSS</Link>
          <Link
            className={getLinkClassName('styled-components')}
            to="/styled-components"
          >
            styled-components
          </Link>

          {this.props.link
            ? <a
                className="Right"
                target="blank"
                href={`https://github.com/${this.props.link}`}
              >
                gh: {this.props.link}
              </a>
            : null}
        </div>
        <div className="App-header App-buttons">
          <div className="ButtonBlock">
            <button
              disabled={this.state.type}
              onClick={this.onRenderSameComponents}
              className="Button"
            >
              Render 1000 same components
            </button>
            <a target="blank"
              href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${this.props.title.toLowerCase()}/block.js`}>
              Component source
            </a>
          </div>

          <div className="ButtonBlock">
            <button
              disabled={this.state.type}
              onClick={this.onRenderDifferentComponents}
              className="Button"
            >
              Render 1000 differnet components
            </button>

            <a target="blank"
              href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${this.props.title.toLowerCase()}/differentBlocks.js`}>
              Components source
            </a>
          </div>

          <div className="ButtonBlock">
            <button
              disabled={!this.state.type}
              onClick={this.onClear}
              className="Button"
            >
              Clear
            </button>
          </div>

          <div className="App-buttons App-buttons-primary">
            <div className="PropsBlock">
              <input
                className="Checkbox"
                id="Primary"
                type="checkbox"
                checked={this.state.props.isPrimary}
                onChange={e => this.onFormChange('isPrimary', e.target.checked)}
              />
              <label className="CheckboxLabel" htmlFor="Primary">Primary</label>
            </div>
            <div className="PropsBlock">
              <input
                className="Input"
                type="text"
                placeholder="Children"
                value={this.state.props.children}
                onChange={e => this.onFormChange('children', e.target.value)}
              />
            </div>
          </div>

          <div className="Time">
            {this.state.time ? this.state.time : null}
          </div>
        </div>

        <div>
          {
            this.state.type
            ? <Perfomance
                type={this.state.type}
                component={this.props.component}
                components={this.props.components}
                onDidMount={this.onPerfomanceDidMount}
                props={this.state.props}
              />
            : <div className="RepoLink">
                <a href="https://github.com/tuchk4/css-in-js-app" target="blank">
                  https://github.com/tuchk4/css-in-js-app
                </a>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Page;
