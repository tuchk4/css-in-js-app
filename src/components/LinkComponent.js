import React from 'react';

export default ({ title, item }) => {
  return (
    <a
      href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${
        title
      }/${item}`}
      target="blank"
      className="soruce-link"
    >
      <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
    </a>
  );
};
