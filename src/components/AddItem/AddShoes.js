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
        return (
            <View>
                <View>
                    <View>
                        <TextInput
                        placeholder="Enter Shoes Name"
                        onChangeText={ value => this.props.shoeUpdated({ prop: 'name', value })}
                        />
                    </View>
                    <View>
                        <View>
                            <Dropdown
                            label="Size"
                            data={ this.props.sizeData }
                            onChangeText={ value => this.props.shoeUpdated({ prop: 'size', value})}
                            />
                        </View>

                        <View>
                            <Dropdown
                            label="Brand"
                            data={ this.props.brandData }
                            onChangeText={ value => this.props.shoeUpdated({ prop: 'brand', value})}
                            />
                        </View>

                        <View>
                            <Dropdown
                            label="Condition"
                            data={ this.props.conditionData }
                            onChangeText={ value => this.props.shoeUpdated({ prop: 'condition', value})}
                            />
                        </View>
                    </View>

                    <View>
                        <View>
                            <View>
                                <Text>Retail Price($)</Text>
                                <TextInput
                                keyboard="numeric"
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'retailPrice', value }) }
                                />
                            </View>

                            <View>
                                <Text>Resell Price($)</Text>
                                <TextInput
                                keyboard="numeric"
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'resellPrice', value }) }
                                />
                            </View>
                        </View>
                        <View>
                            <View>
                                <Text>Buyer</Text>
                                <TextInput
                                onChangeText={ value => this.props.shoeUpdated({ prop: 'buyer', value })}
                                />
                            </View>
                            <View>
                                { this.renderSellDate() }
                            </View>
                        </View>

                    </View>

                    <View>
                        <TouchableWithoutFeedback
                        onPress={ this.onButtonPress.bind(this) }
                        >
                            <View>
                                <Text>
                                    SAVE
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </View>
        );
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