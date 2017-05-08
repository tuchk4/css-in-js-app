import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';
import Perf from 'react-addons-perf';
import MetisMenu from 'react-metismenu';
import Box, { Page } from 'react-layout-components';

import Aphrodite from './scenes/Aphrodite';

import ReactJss from './scenes/ReactJss';
import ReactJssWithoutPlugins from './scenes/ReactJssWithoutPlugins';
import StyledJSS from './scenes/StyledJss';

import Glamor from './scenes/Glamor';

import Rockey from './scenes/Rockey';
import RockeySpeedy from './scenes/RockeySpeedy';

import Fela from './scenes/Fela';
import FelaMonolithic from './scenes/FelaMonolithic';

import StyledComponents from './scenes/StyledComponents';

import './menu.css';
import './index.css';

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
        label: 'react-jss w/o plugins',
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
];

ReactDOM.render(
  <HashRouter>
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
          <Route exact path="/" component={Rockey} />
          <Route path="/rockey-react" component={Rockey} />
          <Route path="/rockey-react-speedy" component={RockeySpeedy} />

          <Route path="/glamor" component={Glamor} />

          <Route path="/aphrodite" component={Aphrodite} />

          <Route path="/react-jss" component={ReactJss} />
          <Route
            path="/react-jss-wihtout-plugins"
            component={ReactJssWithoutPlugins}
          />
          <Route path="/styled-js" component={StyledJSS} />

          <Route path="/react-fela" component={Fela} />
          <Route path="/react-fela-monolithic" component={FelaMonolithic} />
          <Route path="/styled-components" component={StyledComponents} />
        </div>
      </Box>
    </Page>
  </HashRouter>,
  document.getElementById('root')
);
