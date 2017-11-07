import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  '@keyframes jss-probe-animation': {
    from: {
      color: 'red',
    },

    to: {
      color: 'blue',
    },
  },
  probe: {
    animation: '1s jss-probe-animation',
  },
};

const Probe = ({ classes, children, onAnimationStart }) => {
  return (
    <div className={classes.probe} onAnimationStart={onAnimationStart}>
      {children}
    </div>
  );
};

export default injectSheet(styles)(Probe);
