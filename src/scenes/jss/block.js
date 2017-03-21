import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import colors from '../../utils/colors';

const styles = {
  button: {
    minWidth: '16px',
    height: '16px',
    display: 'inline-block',
    padding: '15px',
    border: '0',
    fontWeight: 'bold',

    transition: [
      'background-color .5s',
      'color 1s',
    ],
    '&:hover': {
      backgroundColor: 'black !important',
      color: 'white'
    }
  },
  primary: {

  }
};

for (let i = 0; i < colors.length; i++) {
  styles[`button${i}`] = colors[i][0];
  styles[`primaryButton${i}`] = colors[i][1];
};

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = classnames(className, classes.button, classes[`button${i}`], {
    [classes.primary]: isPrimary,
    [classes[`primaryButton${i}`]]: isPrimary
  });

  return <div className={classList}>{children}</div>;
};

Block.displayName = 'Block';

export default injectSheet(styles)(Block);
