import React from 'react';
import Link from './';

export default ({ lib, type }) => {
  return (
    <Link
      href={`https://github.com/tuchk4/css-in-js-app/blob/master/src/scenes/${
        lib
      }/${type}`}
      target="blank"
    >
      <i className="fa fa-file-code-o fa-1x" aria-hidden="true" />
    </Link>
  );
};
