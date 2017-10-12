import React , {Component}  from 'react';
import {
    StyleSheet,
    View ,
    Text,
    TouchableHighlight
} from 'react-native';

import PropTypes from 'prop-types';

//
// a line seprator for sepratting components in a scroll view !
// for using this the parent container flexDirection must be column and alignItem must be strecth!
//
export class Seprator extends Component {
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
//
//
// props example:
// { pickers : [ {key : 1 , text : 'ok'} , {key : 2 , text : 'yes'} , {key : 3 , text : 'no'} ]
//
export class SubjectsPicker extends Component {
    constructor(props) {
        super(props);

        this.pickers_count = this.props.pickers.length;

        let pickers_state = [];
        for (let i=0 ; i<this.pickers_count ; i++){
            pickers_state.push(0);
        }
        pickers_state[0] = 1;

        this.state = {
            pickers_state: pickers_state
        };

        this.pickers_colors = ['#f0f0f0', '#1c9f63'];

        this.style = StyleSheet.create(
            {
                main_container: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: 50,
                    backgroundColor: 'red',
                },
                picker_container : {
                    margin : 5,
                    marginLeft : 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                },
                picker : {
                    padding: 1,
                    width: 50,
                    height: 30,
                    justifyContent : 'center',
                    alignItems : 'center',
                } ,
                text_container : {
                    flex : 1,
                    flexDirection : 'row',
                    justifyContent : 'flex-end',
                    alignItems : 'center',
                    marginRight : 25,
                }
            }
        );

        this.picker_background = this.picker_background.bind(this);
        this.picker_on_press = this.picker_on_press.bind(this);
        this.picker_component_creator = this.picker_component_creator.bind(this);
    }

    picker_component_creator(picker_text, picker_key , onPress){
        return(
            <TouchableHighlight style={[this.style.picker , this.picker_background(picker_key)]}
                                onPress={ ()=>{this.picker_on_press(picker_key , onPress)}}
                                key={picker_key}
            >
                <Text>{picker_text}</Text>
            </TouchableHighlight>
        );
    }

    picker_background(picker_code) {
        return {
            backgroundColor: this.pickers_colors[this.state.pickers_state[picker_code]],
        };
    }

    picker_on_press(picker_code , callback) {

        let pickers_state = [];
        for (let i=0 ; i<this.pickers_count ; i++)
            pickers_state.push(0);
        pickers_state[picker_code] = 1;

        this.setState(
            {
                pickers_state: pickers_state
            }
        );

        callback();
    }

    render() {
        const pickers = this.props.pickers.
        map( (picker , index) => this.picker_component_creator(picker.text , index , picker.onPress) );

        return (
            <View style={this.style.main_container}>
                <View style={this.style.picker_container}>
                    {pickers}
                </View>
                <View style={this.style.text_container}>
                    <Text>تعداد</Text>
                </View>
            </View>
        );
    }
}
