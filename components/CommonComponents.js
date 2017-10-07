import React from 'react';
import {
    StyleSheet,
    View ,
    Text,
} from 'react-native';

import PropTypes from 'prop-types';

//
// a line seprator for sepratting components in a scroll view !
// for using this the parent container flexDirection must be column and alignItem must be strecth!
//
export class Seprator extends React.Component {
    constructor(props){
        super(props);

        let backgroundColor = '#78758c';
        let row_margin = 15;
        let col_margin = 5;

        if (props.seprator_prop !== undefined){
            if (props.seprator_prop.color !== undefined){
                backgroundColor = props.seprator_prop.color;
            }
            if (props.seprator_prop.row_margin !== undefined){
                row_margin = props.seprator_prop.row_margin;
            }
            if (props.seprator_prop.col_margin !== undefined){
                col_margin = props.seprator_prop.col_margin;
            }
        }

        this.style = StyleSheet.create({
            container : {
                flex : 1,
            },
            line : {
                backgroundColor : backgroundColor,
                height : 1,
                marginLeft : row_margin,
                marginRight : row_margin,
                marginTop : col_margin,
                marginBottom : col_margin,
            }
        });
    }

    render (){
        return(
            <View style={this.style.container} >
                <View style={this.style.line}/>
            </View>
        );
    }
}

Seprator.propTypes = {
    seprator_prop : PropTypes.shape({
        color : PropTypes.string,
        row_margin : PropTypes.int,
        col_margin : PropTypes.int,
    }),
};

//
//
//
