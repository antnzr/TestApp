import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ImageScreen from '../screens/ImageScreen';
import ListScreen from '../screens/ListScreen';

const MainNavigator = createStackNavigator({
    Home: {
        screen: ListScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Image: {
        screen: ImageScreen,
        navigationOptions: {
            header: null
        }
    },
});

export default createAppContainer(MainNavigator);



