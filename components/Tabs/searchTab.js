import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    Picker,
    TouchableNativeFeedback,
    TouchableHighlight,
} from 'react-native';

import {SubjectsPicker , Seprator , SubjectCounter} from './../CommonComponents';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class Tab2 extends Component {
    constructor(props) {
        super(props);

        this.style = {
            float_button: {
                backgroundColor: '#f93251',
                width: 110,
                height: 50,
                position: 'absolute',
                bottom: 15,
                borderRadius: 7,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
            // fb_container : {
            //     flex : 1,
            //     flexDirection : 'row',
            //     justifyContent : 'flex-start',
            //     alignItems : 'center',
            // },
            fb_text: {
                color: 'white',
                fontSize: 22,
                fontFamily: "IRANYekanMobileBold",
            },
            // image_style : {
            //     image : 'white',
            //     width : 40,
            //     height : 40,
            //     margin : 3,
            // }
        }
    }

    //
    static navigationOptions = {
        tabBarVisible: true,

        title: "asd",

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
    render() {
        return (
            <View style={common_styles.container}>
                <ScrollView contentContainerStyle={common_styles.contentContainer}>
                    <SearchHeader />
                    <Seprator />
                    <CitySearch />
                    <Seprator />
                    <PriceRange />
                    <Seprator />
                    <GuestCount />
                    <Seprator />
                    <HomeDetails />
                    <Seprator />
                    <HomeFeatures />
                    <Seprator />
                    <HomePermissions />
                    <Seprator />
                    <EmptyComponent />
                </ScrollView>

                <TouchableHighlight
                    style={this.style.float_button}
                    onPress={()=>{}}
                >
                    <Text style={this.style.fb_text}>جستجو</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


//
// styles applied to main scrollView as main container!
//
const common_styles = StyleSheet.create({
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

        header_text: {
            fontSize: 20,
            fontFamily: "IRANYekanMobileBold",
            marginRight: 25,
            marginBottom: 5,
            marginTop: 3,
            color: '#454353',
        }

    }
);


//
// components of search tab!
//
class SearchHeader extends React.Component {
    constructor(props) {
        super(props);

        this.first_text = "دنبال چی میگردی؟";
        this.second_text = "ویلا یا خونه موردنظرتو جستجو کن!";

        this.style = StyleSheet.create({
            container: {
                // height: 150,
                // backgroundColor : 'blue',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
            searchImage: {
                width: 64,
                height: 64,
                margin: 20,
                marginBottom: 10,
                marginLeft: 15,
            },
            text: {
                fontFamily: "IRANYekanMobileBold",
                fontSize: 18,
                color: '#454353',
            }
        });
    }

    render() {
        return (
            <View style={this.style.container}>
                <View>
                    <Text style={this.style.text}>{this.first_text}</Text>
                    <Text style={this.style.text}>{this.second_text}</Text>
                </View>
                <Image
                    source={require('./../Images/search.png')}
                    style={this.style.searchImage}
                />

            </View>
        );
    }
}

//
//
//
class CitySearch extends Component {

    constructor(props) {
        super(props);

        this.style = StyleSheet.create({
            picker: {
                color: '#b2bdc2',
                height: 30,
            },
            picker_text: {
                fontFamily: "IRANYekanMobileBold",
            },
            picker_container: {
                height: 40,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#a5a9b5',
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                marginTop: 10,
                padding: 5,
                backgroundColor: 'white'
            },
        });
    }

    render() {
        return (
            <View>
                <Text style={common_styles.header_text}>
                    شهر
                </Text>
                <View
                    style={this.style.picker_container}
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
class PriceRange extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slider_values: [100, 150]
        };

        this.style = StyleSheet.create({
            slider_container: {
                height: 30,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                // backgroundColor : 'gray',
                // marginBottom : 20,
                // marginTop : 10,111
            },
            text_container: {
                // backgroundColor : 'blue',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
            },
            text: {
                fontFamily: "IRANYekanMobileRegular",
                fontSize: 18,
            }
        });

        this.sliderOneValuesChangeStart = this.sliderOneValuesChangeStart.bind(this);
    }

    sliderOneValuesChangeStart(values) {
        this.setState(
            {
                slider_values: [values[0], values[1]]
            }
        );
    }

    render() {
        return (
            <View>
                <Text style={common_styles.header_text}>
                    بازه قیمت
                </Text>
                <View
                    style={this.style.slider_container}
                >
                    <View style={{height : 20}}>
                        <MultiSlider
                            min={50}
                            max={500}
                            step={10}
                            values={this.state.slider_values}
                            sliderLength={300}
                            onValuesChange={(values) => this.sliderOneValuesChangeStart(values)}
                        />
                    </View>
                </View>

                <View style={this.style.text_container}>
                    <Text style={this.style.text}>
                        شروع از {this.state.slider_values[0]} هزار تومان تا {this.state.slider_values[1]} هزار تومان
                    </Text>
                </View>
            </View>
        )
    }

}

//
//
//
class GuestCount extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text style={common_styles.header_text}>
                    چند نفرید؟
                </Text>
                <SubjectCounter
                    text="حداکثر تعداد پذیرش"
                    count_min={0}
                    count_max={10}
                />
            </View>
        )
    }
}

//
//
//
class HomeDetails extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text style={common_styles.header_text}>
                    جزئیات خانه
                </Text>
                <SubjectCounter
                    text="حداقل تعداد اتاق"
                    count_min={1}
                    count_max={6}
                />
            </View>
        )
    }
}

//
//
//
class HomeFeatures extends Component {
    constructor(props){
        super(props);

        this.picker_options = [
            {
                text : 'مهم نیست',
                onPress : ()=>{alert('ok')},
            },
            {
                text : 'دارد',
                onPress : ()=>{alert('yes')},
            },
            {
                text : 'ندارد',
                onPress : ()=>{alert('no')},
            }
        ];
    }

    render(){

        return(
            <View>
                <Text style={common_styles.header_text}>
                    امکانات خانه
                </Text>
                <SubjectsPicker
                    text = "تلویزیون"
                    pickers={this.picker_options}
                />
                <SubjectsPicker
                    text = "آشپزخانه"
                    pickers={this.picker_options}
                />
                <SubjectsPicker
                    text = "وای فای"
                    pickers={this.picker_options}
                />
                <SubjectsPicker
                    text = "نمای زیبا"
                    pickers={this.picker_options}
                />
            </View>

        );
    }
}

class HomePermissions extends Component {
    constructor(props){
        super(props);

        this.picker_options = [
            {
                text : 'مهم نیست',
                onPress : ()=>{alert('ok')},
            },
            {
                text : 'اجازه دارد',
                onPress : ()=>{alert('yes')},
            },
            {
                text : 'اجازه ندارد',
                onPress : ()=>{alert('no')},
            }
        ];
    }

    render(){
        return(
            <View>
                <Text style={common_styles.header_text}>
                    اجازه
                </Text>
                <SubjectsPicker
                    text = "سیگار"
                    pickers={this.picker_options}
                />
                <SubjectsPicker
                    text = "حیوانات خانگی"
                    pickers={this.picker_options}
                />
            </View>
        )
    }

}

class EmptyComponent extends Component{
    render(){
        return (
            <View
                style = {{
                    height : 70,
                }}
            />
        );
    }
}