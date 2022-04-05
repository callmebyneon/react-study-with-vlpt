import React from 'react';
import classnames from 'classnames';

import styles from './Box.module.scss';

function OutterBox({ className, children }) {
  return (
    <div className={classnames(styles.Box, className)}>
      {children}
    </div>
  );
}

export default OutterBox;