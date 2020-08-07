import React, { Component } from 'react';

import styles from './Logo.module.scss';

import logo from './logo.svg';

export default class Logo extends Component {
  render() {
    return (
      <div className={ styles.logoWrap }>
        <img className={ styles.logo } src={ logo } alt="logo" />
      </div>
    )
  }
};