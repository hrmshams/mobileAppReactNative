import React , {Component} from 'react';

import mainTab from './Tabs/firstTab';
import searchTab from './Tabs/searchTab';

import {TabNavigator}
from 'react-navigation';

// route config
const route_config = {
    first_tab: {screen: mainTab},
    search_tab: {screen: searchTab},
};

const properties = {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    backBehavior: true,
    tabBarOptions :{
        activeTintColor : '#454353',
        // pressColor : '#000000',
        style:{
            backgroundColor: 'white',
        },
        indicatorStyle: {
            backgroundColor: '#f93251',
            height : 5,
        },
        labelStyle:{
            fontSize : 15,
            color : '#454353'
        }
    },
};

const main_tab_navigator = TabNavigator(route_config, properties);

export default main_tab_navigator;