import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Header } from './components/common/index';
import LibraryList from './components/LibraryList';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header headerText="Tech Stack"/>
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}
