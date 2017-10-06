import React , {Component} from 'react';
import {
    Text
} from 'react-native';

import TabsSection from './mainTabNavigator';
import Page2 from './page2';

import {
    StackNavigator,
} from 'react-navigation';

const nav = StackNavigator({
    tabs_section: {screen : TabsSection},
    page2: {screen : Page2},
});

export default nav;