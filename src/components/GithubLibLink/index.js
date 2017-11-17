import React from 'react';
import './GithubLibLink.css';

export default props => (
  <div className="gh-link-block">
    <a
      target="blank"
      className="gh-link"
      href={`https://github.com/${props.github}`}
    >
      {props.github}
    </a>
  </div>
);
