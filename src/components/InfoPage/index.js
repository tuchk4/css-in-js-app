import React from 'react';
import './InfoPage.css';

export default () => (
  <div className="info-block">
    <div className="info-block--part">
      <div className="github-link-text">
        CSS-IN-JS-APP{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
          href="https://github.com/tuchk4/css-in-js-app"
        >
          tuchk4/css-in-js-app
        </a>
      </div>
      <p>
        This is not the real benchmark but it shows the differents between CSS
        in JS libraries under the same conditions. Accent was made on dynamic
        CSS that depends on component's props.
      </p>
      <p className="highlite">
        All libraries are used with React. So resulted time also includes React
        render cycle.
      </p>
    </div>
    <div className="info-block--part">
      <p>
        Each library has different features and possibilities. For example{' '}
        <b>fela</b> and <b>styletron</b> uses{' '}
        <a
          href="https://ryantsao.com/blog/virtual-css-with-styletron"
          target="_blank"
          rel="noopener noreferrer"
        >
          atomic css design
        </a>
        . <b>styled-components</b> and <b>rockey</b> uses{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
          target="_blank"
          rel="noopener noreferrer"
        >
          template literals
        </a>{' '}
        to define CSS.
      </p>
      <p className="highlite">
        If render components again after <i>"CLEAR"</i> and resulted time is
        lesser this means that library uses cached styles. For example try
        styled-components. Second render is faster in ~ 25 times.
      </p>
    </div>
  </div>
);
