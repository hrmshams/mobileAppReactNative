import React, {Component} from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.style = StyleSheet.create({
            container: {
                backgroundColor: '#fafafa',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
            },
            contentContainer: {
                // backgroundColor : 'gray',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
            },
            resultCompoent: {
                height: 140,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                margin: 10,
                shadowColor: '#000',
                shadowRadius: 5,
                shadowOffset: {
                    width: 5,
                    height: 5,
                },
                shadowOpacity: 1,
                elevation: 1,
            },
            result_compoennt_content : {
                backgroundColor : 'red',
                width : 100,
                height : 100,
                margin : 10,
            },
            image: {
                width : 80,
                height : 80,
                margin : 10,
            }
        });
    }

    render() {
        return (
            <View style={this.style.container}>
                <ScrollView contentContainerStyle={this.style.contentContainer}>
                    <View style={this.style.resultCompoent}>
                        <View style={this.style.result_compoennt_content}>

                        </View>
                        <Image
                            source={require('./../Images/search.png')}
                            style={this.style.image}
                        >
                        </Image>
                    </View>
                </ScrollView>
            </View>
        );
    }
}