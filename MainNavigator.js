import React from 'react';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation';

  import {Icon} from 'native-base';


 import AppScreen from './App';
 import ScanInfoScreen from './ScanInfo';
 import MonitorScreen from './Monitor';
 import LoginScreen from './Login';


 /*
 const StackNavigator = createStackNavigator(
  {
    Scan: {
      screen: AppScreen,
      navigationOptions: {
          title: 'Scan',
          headerStyle: {
              backgroundColor: '#f4511e',
            },
           headerTintColor: '#fff',
           //headerTitleStyle: {
           //   textAlign:"center",
           //   flex: 1
          //},
        }
    },
    ScanInfo: {
        screen: ScanInfoScreen,
        navigationOptions: {
          title: 'Scan Info',
          headerStyle: {
              backgroundColor: '#f4511e',
            },
           headerTintColor: '#fff',
        }
    }    
  },
  {
      headerMode: "none",
  }
  
);
*/




const TabNavigator = createBottomTabNavigator(
  {
    Scan: {
      screen: AppScreen,
      navigationOptions: {
          tabBarLabel: 'Scan',
          tabBarIcon: ({tintColor}) => <Icon name="camera"
              style={{color: tintColor}}/>
        }
    },
    Monitor: {
      screen: MonitorScreen,
      navigationOptions: {
        tabBarLabel: 'Monitor',
        tabBarIcon: ({tintColor}) => <Icon name="car"
             style={{color: tintColor}}/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#ff6f00'
    }
  }
);



const MainStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Main: {
        screen: TabNavigator
    },
    ScanInfo: {
      screen: ScanInfoScreen
    }    
  },
  {
      headerMode: "none",
  }
  
);






 export default createAppContainer(MainStackNavigator);

