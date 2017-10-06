import React , {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,

} from 'react-native';

import {Seprator} from './../CommonComponents';

export default class Tab2 extends Component{
    constructor(props)
    {
        super(props);
    }

    //
    static navigationOptions = {
        tabBarVisible : true,

        title : "asd",

        headerTitleStyle: {
            color: 'white',
            // alignSelf: 'flex-end',
            // fontWeight: "200",
            // margin:5
        },
        headerStyle: {
            backgroundColor: '#15172c', height: 60
        },
    };

    //
    //
    //
    render(){
        return(
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.line} />
                <View style={styles.line} />
                <Seprator />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        container : {
            backgroundColor : '#fafafa',
            flex : 1,
        },
        contentContainer : {
            flexDirection : 'column',
            justifyContent : 'flex-start',
            alignItems : 'stretch',
        },
        box : {
            backgroundColor : 'blue',
            // width : 20,
            height : 30,
            margin : 5,
        }
}
);
