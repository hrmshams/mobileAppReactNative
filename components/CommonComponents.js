import React , {Component}  from 'react';
import {
    StyleSheet,
    View ,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback
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
        this.text_colors = ['#000000', 'white'];

        this.style = StyleSheet.create(
            {
                main_container: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: 45,
                    // backgroundColor: 'red',
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
                    width: 75,
                    height: 30,
                    justifyContent : 'center',
                    alignItems : 'center',
                } ,
                text_container : {
                    flex : 1,
                    flexDirection : 'column',
                    justifyContent : 'center',
                    alignItems : 'flex-end',
                    marginRight : 30,
                },
                text: {
                    fontFamily: "IRANYekanMobileRegular",
                    fontSize: 18,
                },
                picker_text : {
                    fontFamily: "IRANYekanMobileRegular",
                    fontSize: 14,
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
                <Text style={[this.style.picker_text , this.picker_text_color(picker_key)]}>
                    {picker_text}
                </Text>
            </TouchableHighlight>
        );
    }

    picker_background(picker_code) {
        return {
            backgroundColor: this.pickers_colors[this.state.pickers_state[picker_code]],
        };
    }

    picker_text_color(picker_code){
        return {
            color : this.text_colors[this.state.pickers_state[picker_code]],
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
                    <Text style={this.style.text}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}



//
// this is a component that used for in some section!
// show the count of object that user must determine that!
//

export class SubjectCounter extends Component {

    constructor(props) {
        super(props);

        this.style = StyleSheet.create({
            text: {
                fontFamily: "IRANYekanMobileRegular",
                fontSize: 18,
                marginRight: 30,
            },
            sub_container: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 15,
            },
            minus_plus_container: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: 25,
            },
            minus_plus: {
                marginLeft: 3,
                marginRight: 3,
                width: 30,
                height: 30,
                // backgroundColor : 'blue',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
            },
            minus_plus_text: {
                fontSize: 25,
            },

        });

        this.state = {
            object_count: 1
        };

        this.onMinusPlusPressed = this.onMinusPlusPressed.bind(this);

    }

    onMinusPlusPressed(is_plus) {
        if (this.state.object_count === this.props.count_min && is_plus === false) {
            return
        }
        else if (this.state.object_count === this.props.count_max && is_plus === true) {
            return
        }

        this.setState({
            object_count: is_plus ? this.state.object_count + 1 : this.state.object_count - 1
        })
    }

    render() {
        return (
            <View style={this.style.sub_container}>
                <View style={this.style.minus_plus_container}>

                    <TouchableNativeFeedback
                        onPress={() => this.onMinusPlusPressed(false)}
                        background={TouchableNativeFeedback.SelectableBackground()}
                    >
                        <View
                            style={this.style.minus_plus}
                        >
                            <Text
                                style={this.style.minus_plus_text}
                            >-</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <View style={[this.style.minus_plus , {width : 30} ]}>
                        <Text style={this.style.minus_plus_text}>
                            {this.state.object_count}
                        </Text>
                    </View>

                    <TouchableNativeFeedback
                        onPress={() => this.onMinusPlusPressed(true)}
                        background={TouchableNativeFeedback.SelectableBackground()}
                        style={this.style.minus_plus}
                    >
                        <View
                            style={this.style.minus_plus}
                        >
                            <Text
                                style={this.style.minus_plus_text}
                            >+</Text>
                        </View>
                    </TouchableNativeFeedback>

                </View>
                <Text style={this.style.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}
