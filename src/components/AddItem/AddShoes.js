import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import {
    shoeCreate,
    shoeUpdated
} from "../../actions/ItemActions/ShoesActions";

class AddShoes extends Component {

    state = {
        sellDate: ""
    };

    onButtonPress() {
        const {
            name,
            size,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer
        } = this.props;

        const {
            sellDate
        } = this.state;

        this.props.shoeCreate({
            name,
            size,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer,
            sellDate
        });
    }

    renderSellDate() {
        if ( this.state.sellDate === "" ) {
            return <DatePicker
                format="MM/DD/YYYY"
                placeholder="Select Date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={ (date) => this.setState({sellDate: date})}
            />
        }
        else {
            return <DatePicker
                date={this.state.sellDate}
                format="MM/DD/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={ (date) => this.setState({sellDate: date})}
            />
        }
    }

    render() {

        const {
            backgroundStyle,
            containerStyle,
            inputStyle,
            soldSection,
            priceSection,
            smallInputStyle,
            buyerStyle,
            buttonStyle
        } = styles;

        return (
            <View style={ backgroundStyle }>
                <View style={ containerStyle }>
                    <View>
                        <TextInput
                        style={ inputStyle }
                        placeholder="Enter Shoes Name"
                        onChangeText={ value => this.props.shoeUpdated({ prop: 'name', value })}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row'}}>
                            <View>
                                <Dropdown
                                label="Size"
                                data={ this.props.sizeData }
                                containerStyle={{ width: 65, marginLeft: 5 }}
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'size', value})}
                                />
                            </View>

                            <View>
                                <Dropdown
                                label="Brand"
                                data={ this.props.brandData }
                                containerStyle={{ width: 125, marginLeft: 8 }}
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'brand', value})}
                                />
                            </View>
                        </View>

                        <View>
                            <Dropdown
                            label="Condition"
                            data={ this.props.conditionData }
                            containerStyle={{ width: 198, marginLeft: 5 }}
                            onChangeText={ value => this.props.shoeUpdated({ prop: 'condition', value})}
                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 20, flex: 1 }}>
                        <View style={ soldSection }>
                            <View style={ priceSection }>
                                <Text>Retail Price($)</Text>
                                <TextInput
                                keyboard="numeric"
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'retailPrice', value }) }
                                style={ smallInputStyle }
                                />
                            </View>

                            <View style={ priceSection }>
                                <Text>Resell Price($)</Text>
                                <TextInput
                                keyboard="numeric"
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'resellPrice', value }) }
                                style={ smallInputStyle }
                                />
                            </View>

                        </View>

                        <View style={{ borderBottomWidth: 1, borderColor: '#E0E0E0', paddingBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={{ fontSize: 20 }}>Buyer:</Text>
                                <TextInput
                                    onChangeText={ value => this.props.shoeUpdated({ prop: 'buyer', value })}
                                    style={ buyerStyle }
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={[ priceSection, { paddingVertical: 20 } ]}>
                                { this.renderSellDate() }
                            </View>
                        </View>

                    </View>

                    <View style={{ alignSelf: 'center', flexDirection: 'row'}}>
                        <View style={ buttonStyle }>
                            <TouchableWithoutFeedback
                            onPress={ this.onButtonPress.bind(this) }
                            >
                                <View>
                                    <Text style={{ color: '#ffffff', fontSize: 18 }}>
                                        SAVE
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = {
    backgroundStyle: {
        backgroundColor: '#42A5F5',
        flex: 1
    },
    containerStyle: {
        backgroundColor: '#fbfbfb',
        margin: 7,
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 2
    },
    inputStyle: {
        borderRadius: 2,
        backgroundColor: '#fbfbfb',
        height: 45,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        marginHorizontal: 5
    },
    soldSection: {
        flexDirection: 'row'
    },
    priceSection: {
        flex: 1,
        alignItems: 'center'
    },
    smallInputStyle: {
        borderWidth: 1,
        width: 60,
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        borderRadius: 2,
        borderColor: '#e6e6e6'
    },
    buyerStyle: {
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        width: 100,
        height: 25,
        borderRadius: 2,
        textAlign: 'center',
        marginLeft: 2,
        marginVertical: 0
    },
    buttonStyle: {
        backgroundColor: '#82b7fc',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#82b7fc',
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 12,
        flex: 1,
        alignItems: 'center'
    }
}

const mapStateToProps = (state) => {
    const {
        name,
        size,
        retailPrice,
        resellPrice,
        brand,
        condition,
        buyer
    } = state.addShoes;



    return {
        name,
        size,
        retailPrice,
        resellPrice,
        brand,
        condition,
        buyer,
        sizeData: state.sizeData,
        brandData: state.brandData,
        conditionData: state.conditionData
    }
}

export default connect(mapStateToProps, { shoeCreate, shoeUpdated })(AddShoes);