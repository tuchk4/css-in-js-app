import React from 'react';
import classnames from 'classnames';
import { css } from 'glamor';
import colors from '../../utils/colors';

const buttonRule = css({
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
});

const primaryRule = css({

});

const rules = {
  button: [],
  primaryButton: []
};

for (let i = 0; i < colors.length; i++) {
  rules.button.push(css({
    backgroundColor: colors[i][0]
  }));

  rules.primaryButton.push(css({
    backgroundColor: colors[i][1]
  }));
};

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = classnames(className, buttonRule.toString(), rules.button[i].toString(), {
    [primaryRule]: isPrimary,
    [rules.primaryButton[i]]: isPrimary,
  });

  return <div className={classList}>{children}</div>;
};

Block.displayName = 'Block';

export default Block;
