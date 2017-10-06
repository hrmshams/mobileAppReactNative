/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

import Swipeout from 'react-native-swipeout';

export default class myfirstapp extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Welcome tabs_section ',
    };

    render() {

        return (
            <View>

            </View>
        );
    }
}
