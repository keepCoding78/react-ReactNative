/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import store from './app/reducers';
import Root           from './app/native/containers/Root';

export default class App extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}


