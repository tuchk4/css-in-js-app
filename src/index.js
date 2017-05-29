import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Perf from 'react-addons-perf';
import MetisMenu from 'react-metismenu';
import Box, { Page } from 'react-layout-components';

import Aphrodite from './scenes/Aphrodite';
import Glamorous from './scenes/Glamorous';
import Styletron from './scenes/Styletron';

import ReactJss from './scenes/ReactJss';
import ReactJssWithoutPlugins from './scenes/ReactJssWithoutPlugins';
import StyledJSS from './scenes/StyledJss';
import ReactInline from './scenes/ReactInline';

import Glamor from './scenes/Glamor';

import Rockey from './scenes/Rockey';

import Fela from './scenes/Fela';
import FelaMonolithic from './scenes/FelaMonolithic';

import StyledComponents from './scenes/StyledComponents';

import './menu.css';
import './index.css';
import './probe.css';

window.Perf = Perf;

const content = [
  {
    label: 'Rockey',
    to: '#/rockey-react',
  },
  {
    label: 'Glamor',
    to: '#/glamor',
  },
  {
    label: 'Glamorous',
    to: '#/glamorous',
  },
  {
    label: 'Styletron',
    to: '#/styletron',
  },
  {
    label: 'Aphrodite',
    to: '#/aphrodite',
  },
  {
    label: 'JSS',
    content: [
      {
        label: 'react-jss',
        to: '#/react-jss',
      },
      {
        label: 'react-jss with only compose',
        to: '#/react-jss-wihtout-plugins',
      },
      {
        label: 'styled-jss',
        to: '#/styled-js',
      },
    ],
  },
  {
    label: 'Fela',
    content: [
      {
        label: 'react-fela',
        to: '#/react-fela',
      },
      {
        label: 'react-fela monolithic',
        to: '#/react-fela-monolithic',
      },
    ],
  },
  {
    label: 'styled-components',
    to: '#/styled-components',
  },
  {
    label: 'react-inline',
    to: '#/react-inline',
  },
];

ReactDOM.render(
  <Page>
    <Box fit>
      <Box column>
        <Box center>
          <a href="https://github.com/tuchk4/css-in-js-app" target="blank">
            <i className="fa fa-github fa-3x" aria-hidden="true" />
          </a>
        </Box>
        <Box flex={1}>
          <MetisMenu content={content} activeLinkFromLocation />
        </Box>
      </Box>
      <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Rockey} />
            <Route exact path="/rockey-react" component={Rockey} />

            <Route exact path="/glamor" component={Glamor} />
            <Route exact path="/glamorous" component={Glamorous} />
            <Route exact path="/styletron" component={Styletron} />

            <Route exact path="/aphrodite" component={Aphrodite} />

            <Route exact path="/react-jss" component={ReactJss} />
            <Route
              exact
              path="/react-jss-wihtout-plugins"
              component={ReactJssWithoutPlugins}
            />
            <Route exact path="/styled-js" component={StyledJSS} />

            <Route exact path="/react-fela" component={Fela} />
            <Route
              exact
              path="/react-fela-monolithic"
              component={FelaMonolithic}
            />
            <Route
              exact
              path="/styled-components"
              component={StyledComponents}
            />
            <Route exact path="/react-inline" component={ReactInline} />
          </Switch>
        </HashRouter>
      </div>
    </Box>
  </Page>,
  document.getElementById('root')
);
