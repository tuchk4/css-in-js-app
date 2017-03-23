import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';

import Aphrodite from './scenes/aphrodite';
import JSS from './scenes/jss';
import Glamor from './scenes/glamor';
import Rockey from './scenes/rockey';
import Fela from './scenes/fela';
import StyledComponents from './scenes/styled-components';

import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Rockey} />
      <Route path="/Rockey" component={Rockey} />
      <Route path="/Glamor" component={Glamor} />
      <Route path="/Aphrodite" component={Aphrodite} />
      <Route path="/JSS" component={JSS} />
      <Route path="/Fela" component={Fela} />
      <Route path="/styled-components" component={StyledComponents} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
