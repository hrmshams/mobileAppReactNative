import React , {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image

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
class SearchHeader extends React.Component{
    constructor(props){
        super(props);

        this.first_text = "دنبال چی میگردی؟";
        this.second_text = "ویلا یا خونه موردنظرتو جستجو کن!";

        this.style = StyleSheet.create({
            container : {
                // height: 150,
                // backgroundColor : 'blue',
                flex : 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems:'center',
            },
            searchImage : {
                width : 64,
                height : 64,
                margin : 30,
                marginBottom : 20,
                marginLeft :20,
            },
            text : {
                fontFamily: "IRANYekanMobileBold",
                fontSize : 19,
                color : '#454353',
            }
        });
    }

    render(){
        return(
            <View style={this.style.container}>
                <View>
                    <Text style={this.style.text}>{this.first_text}</Text>
                    <Text style={this.style.text}>{this.second_text}</Text>
                </View>
                <Image
                    source = {require('./../Images/search.png')}
                    style={this.style.searchImage}
                />

            </View>
        );
    }
}

