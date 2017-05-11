import React from 'react';
import classnames from 'classnames';
import { css } from 'glamor';
import colors from '../../utils/colors';

const blockRule = css({
  minWidth: '16px',
  height: '16px',
  float: 'left',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
});

const rules = {
  block: [],
  primaryBlock: [],
};

for (let i = 0; i < colors.length; i++) {
  rules.block.push(
    css({
      backgroundColor: colors[i][0],
    })
  );

  rules.primaryBlock.push(
    css({
      backgroundColor: colors[i][1],
    })
  );
}

const Block = ({ i, isPrimary, className, classes, children }) => {
  const classList = classnames(
    className,
    blockRule.toString(),
    rules.block[i].toString(),
    {
      [rules.primaryBlock[i]]: isPrimary,
    }
  );

  return <div className={classList}>{children}</div>;
};

export default Block;
