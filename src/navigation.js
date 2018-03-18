import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import SignIn from './screens/SignIn/SignIn';
import FindPlace from './screens/FindPlace/FindPlace';
import SharePlace from './screens/SharePlace/SharePlace'; 

export const AuthStack = StackNavigator({
  SignIn: {
    screen: SignIn
  }
});

const MainTabs = TabNavigator({
  FindPlace:  {
    screen: FindPlace,
    navigationOptions: {
      title: 'Find Place',
    }
  },
  SharePlace: {
    screen: SharePlace, 
    navigationOptions: {
      title: 'Share Place'
    }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#aaa'
    }
  }
});

export const MainStack = StackNavigator(
  {
    MainTabs:  {
      screen: MainTabs
    }
  }
)