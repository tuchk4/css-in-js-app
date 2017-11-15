import React from 'react';

export default props => (
  <div
    style={{ width: '100%', marginBottom: '15px' }}
    className="gh-link-block"
  >
    <div className="github-link-text">
      <a
        target="blank"
        className="gh-link"
        href={`https://github.com/${props.github}`}
      >
        {props.github}
      </a>
    </div>
  </div>
);
