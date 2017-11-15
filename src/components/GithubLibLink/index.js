import React from 'react';
import Box from 'react-layout-components';

export default props => (
  <Box center className="gh-link-block">
    <div className="github-link-text">
      <a
        target="blank"
        className="gh-link"
        href={`https://github.com/${props.github}`}
      >
        {props.github}
      </a>
    </div>
  </Box>
);
