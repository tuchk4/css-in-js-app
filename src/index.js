import React, { Component } from 'react';
import { render } from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';
// import Perf from 'react-addons-perf';

import Aphrodite from './scenes/Aphrodite';
import Glamorous from './scenes/Glamorous';
import Styletron from './scenes/Styletron';
import Emotion from './scenes/Emotion';

import ReactJss from './scenes/ReactJss';
import ReactJssWithoutPlugins from './scenes/ReactJssWithoutPlugins';
import StyledJSS from './scenes/StyledJss';
import ReactInline from './scenes/ReactInline';

import Glamor from './scenes/Glamor';

import Rockey from './scenes/Rockey';

import Fela from './scenes/Fela';
import FelaMonolithic from './scenes/FelaMonolithic';

import StyledComponents from './scenes/StyledComponents';

import Menu from './components/Menu';

import './index.css';
import './probe.css';

render(
  <div>
    <Menu />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Rockey} />
        <Route exact path="/rockey-react" component={Rockey} />

        <Route exact path="/glamor" component={Glamor} />
        <Route exact path="/glamorous" component={Glamorous} />
        <Route exact path="/styletron" component={Styletron} />

        <Route exact path="/aphrodite" component={Aphrodite} />
        <Route exact path="/emotion" component={Emotion} />

        <Route exact path="/react-jss" component={ReactJss} />
        <Route
          exact
          path="/react-jss-wihtout-plugins"
          component={ReactJssWithoutPlugins}
        />
        <Route exact path="/styled-js" component={StyledJSS} />

        <Route exact path="/react-fela" component={Fela} />
        <Route exact path="/react-fela-monolithic" component={FelaMonolithic} />
        <Route exact path="/styled-components" component={StyledComponents} />
        <Route exact path="/react-inline" component={ReactInline} />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById('root')
);
