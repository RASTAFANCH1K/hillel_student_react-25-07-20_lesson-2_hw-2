import React, { Component } from 'react';

import styles from './TotalCounter.module.scss';

export default class TotalCounter extends Component {
  render() {
    const { products, total, selectedTotal } = this.props;

    return (
      <div className={ styles.counterWrap }>
        <div className={ styles.totalWrap }>
          <div className={ `${styles.total} ${styles.totalTitle}` }>Total:</div>
          <div className={ `${styles.total} ${styles.totalNum}` }>{ total }</div>
        </div>
        <div className={ styles.totalWrap }>
          <div className={ `${styles.total} ${styles.totalTitle}` }>Selected Total:</div>
          <div className={ `${styles.total} ${styles.totalNum}` }>{ selectedTotal }</div>
        </div>
        <div className={ styles.totalWrap }>
          <div className={ `${styles.total} ${styles.totalTitle}` }>Amount:</div>
          <div className={ `${styles.total} ${styles.totalNum}` }>{ products.length }</div>
        </div>
      </div>
    )
  }
};