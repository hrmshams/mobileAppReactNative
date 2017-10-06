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

        this.searchComponent = new SearchHeader();
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
                <SearchHeader />
                <Seprator />
            </ScrollView>
        );
    }
}


//
// styles applied to main scrollView as main container!
//
const styles = StyleSheet.create({
        container : {
            backgroundColor : '#fafafa',
            flex : 1,
        },
        contentContainer : {
            flexDirection : 'column',
            justifyContent : 'flex-start',
            alignItems : 'stretch',
        }
}
);


//
// components of search tab!
//

export class SearchHeader extends Component{
    constructor(props){
        super(props);

        this.style = StyleSheet.create({
            container : {
                height: 50,
                backgroundColor : 'blue',
                flex : 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems:'center',
            },
            searchImage : {

            },
            text : {

            }
        });

    }
    render(){
        return(
            <View style={this.style.container}>
                <image
                source = {{uri:'./../Images/search.png'}}
                style={this.style.searchImage}
                />

                <Text>test</Text>

            </View>
        );
    }
}
