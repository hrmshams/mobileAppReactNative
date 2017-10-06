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
            <ScrollView style={styles.container }>
                <View style={styles.contentContainer} >
                    <View style={styles.box} />
                    <View style={styles.box} />
                    <Seprator />
                </View>
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
            alignItems : 'flex-end',
        },
        box : {
            backgroundColor : 'blue',
            width : 20,
            height : 30,
            margin : 5,
        }
}
);
