import React , {Component} from 'react';
import {StyleSheet , TouchableNativeFeedback , View , Text} from 'react-native';


export default class ListRow extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style = {styles.line}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

ListRow.propTypes = {
    text : React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15,
        backgroundColor: '#81D4FA',
        // borderWidth: 2,
        // borderColor: '#FFFFFF',
        // borderRadius: 20,
        width: 500,
        height: 80,
        marginBottom: 1,
    },
    text: {
        color: '#000000',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

});


// ListRow.prototype = {
//     text : React.PropTypes.string.isRequired
// };