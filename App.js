import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as AppStore from './src/stores/AppStore';
import Main from './src/components/Main';

export default class App extends Component {
  render() {
    return (
      <Provider store={AppStore}>
        <Main />
      </Provider>
    );
  }
}
