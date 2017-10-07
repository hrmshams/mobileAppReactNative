import React , {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    Picker,
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
                <CitySearch />
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

class CitySearch extends Component{

    constructor(props){
        super(props);

        this.style = StyleSheet.create({
            picker : {
                color : '#b2bdc2',
                height : 30,
            },
            picker_text : {
                fontFamily: "IRANYekanMobileBold",
            },
            picker_container : {
                height : 40,
                borderWidth : 1,
                borderRadius : 5,
                borderColor : '#a5a9b5',
                marginLeft : 30,
                marginRight : 30,
                marginBottom : 20,
                marginTop : 10,
                padding : 5,
                backgroundColor : 'white'
            },
            text : {
                fontSize: 23,
                fontFamily: "IRANYekanMobileBold",
                marginRight: 30,
                marginBottom : 5,
                marginTop: 10,
                color : '#454353',
            }
        });
    }

    render(){
        return(
            <View>
                <Text style={this.style.text}>
                    شهر
                </Text>
                <View
                    style = {this.style.picker_container}
                >
                    <Picker
                        style={this.style.picker}
                        selectedValue={"Java"}
                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="انتخاب کنید" value="select" style={this.style.picker_text}/>
                    </Picker>
                </View>
            </View>
        )
    }

}