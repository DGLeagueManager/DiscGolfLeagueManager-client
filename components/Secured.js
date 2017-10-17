import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import BottomNav from './navigators/BottomNav';

export const Root = StackNavigator({
  Home: {
    screen: BottomNav
  }
}, {
  navigationOptions: {
    title: 'App Title'
  }
})



// marginTop: StatusBar.currentHeight ??