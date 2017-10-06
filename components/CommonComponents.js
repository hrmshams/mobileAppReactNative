import React from 'react';
import {
    StyleSheet,
    View ,
} from 'react-native';

export class Seprator extends React.Component {

    constructor(props){
        super(props);

        this.style = StyleSheet.create({
            container : {
                flex : 1,
                flexDirection : 'column',
                justifyContent : 'flex-start',
                alignItems: 'stretch',
                backgroundColor: 'blue',
                width : 50,
            },
            box : {
                backgroundColor : '#000',
                height : 10,
                width : 5,
                // marginLeft : 10,
                // marginRight: 10,
                // marginTop : 5,
                // marginBottom : 5,
            }
        });
    }

    render (){
        return(
            <View style={this.style.container} >
                <View
                    style={this.style.box}
                />
                <View
                    style={this.style.box}
                />
            </View>
        );
    }

}