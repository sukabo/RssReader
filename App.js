/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import store from './src/store';

import FeedsList from './src/screens/FeedsList';
import FeedDetail from './src/screens/FeedDetail';
import EntryDetail from './src/screens/EntryDetail';
import AddFeed from './src/screens/AddFeed';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    FeedsList: {screen: FeedsList},
    FeedDetail: {screen: FeedDetail},
    EntryDetail: {screen: EntryDetail},
    AddFeed: {screen: AddFeed},
  },
  {
    initialRouteName: 'FeedsList',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return <AppContainer screenProps={{store}}/>;
  }
}

// export default class App extends React.Component {
//   constructor(){
//     super();
//   }
//   render(){
//     return <Navigator screenProps={{store}} />;
//   }
// }
