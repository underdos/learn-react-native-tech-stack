/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';
import { Header } from './components/common';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={'Tech Stack'} />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

