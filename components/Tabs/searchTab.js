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
            <ScrollView style={common_styles.container} contentContainerStyle={common_styles.contentContainer}>
                <SearchHeader />
                <Seprator />
                <CitySearch />
                <Seprator />
                <PriceRange />
                <Seprator />
                {/*<GuestCount />*/}
                <Seprator/>
            </ScrollView>
        );
    }
}


//
// styles applied to main scrollView as main container!
//
const common_styles = StyleSheet.create({
        container : {
            backgroundColor : '#fafafa',
            flex : 1,
        },
        contentContainer : {
            flexDirection : 'column',
            justifyContent : 'flex-start',
            alignItems : 'stretch',
        },

        header_text : {
            fontSize: 21,
            fontFamily: "IRANYekanMobileBold",
            marginRight: 30,
            marginBottom : 5,
            marginTop: 10,
            color : '#454353',
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

//
//
//
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
        });
    }

    render(){
        return(
            <View>
                <Text style={common_styles.header_text}>
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

//
//
//
class PriceRange extends Component{

    constructor(props){
        super(props);

        this.style = StyleSheet.create({
            slider_container : {
                height : 40,
                marginBottom : 20,
                marginTop : 10,
            },
        });
    }

    render(){
        return(
            <View>
                <Text style={common_styles.header_text}>
                    بازه قیمت
                </Text>
                <View
                    style = {this.style.picker_container}
                >
                </View>
            </View>
        )
    }

}

//
//
//
class GuestCount extends Component{

    constructor(props){
        super(props);

        this.state = {
            guest_count : 1
        };

        this.style = StyleSheet.create({
            slider_container : {
                height : 40,
                marginBottom : 20,
                marginTop : 10,
            },
        });
        this.onMinusPlusPressed = this.onMinusPlusPressed.bind(this);
    }

    onMinusPlusPressed (is_plus){
        this.setState({
            guest_count : is_plus ? this.state.guest_count + 1 : this.state.guest_count - 1
        })
    }

    render(){
        return(
            <View>
                <Text style={common_styles.header_text}>
                    چند نفرید؟
                </Text>
                <View
                    style = {this.style.picker_container}
                >
                    <Text>
                        حداکثر تعداد پذیرش
                    </Text>
                    <View>
                        <Text onPress={this.onMinusPlusPressed(true)}>+</Text>
                        <Text>
                            {this.state.guest_count}
                        </Text>
                        <Text onPress={this.onMinusPlusPressed(false)}>-</Text>
                    </View>
                </View>
            </View>
        )
    }

}
