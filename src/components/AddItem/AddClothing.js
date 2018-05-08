import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import {
    clothingCreate,
    clothingUpdated
} from "../../actions/ItemActions/ClothingActions";

class AddClothing extends Component {

    state = { sellDate: "" };

    onButtonPress() {
        const {
            name,
            size,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer,
            otherInfo
        } = this.props;

        const {
            sellDate
        } = this.state;

        this.props.clothingCreate({
            name,
            size,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer,
            sellDate,
            otherInfo
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
                        placeholder="Enter Clothing Item Name"
                        onChangeText={ value => this.props.clothingUpdated({ prop: 'name', value })}
                        />
                    </View>

                    <View>
                        <TextInput
                        placeholder="Brand Name"
                        onChangeText={ value => this.props.clothingUpdated({ prop: 'brand', value })}
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Size</Text>
                        <TextInput
                        onChangeText={ value => this.props.clothingUpdated({ prop: 'size', value })}
                        />
                    </View>

                    <View>
                        <Text>Condition</Text>
                        <TextInput
                        onChangeText={ value => this.props.clothingUpdated({ prop: 'condition', value })}
                        multiline={true}
                        />
                    </View>

                    <View>
                        <Text>Other Infomation</Text>
                        <TextInput
                        onChangeText={ value => this.props.clothingUpdated({ prop: 'resellPrice', value })}
                        multiline={true}
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <View>
                            <Text>Retail Price($)</Text>
                            <TextInput
                            onChangeText={ value => this.props.clothingUpdated({ prop: 'retailPrice', value })}
                            />
                        </View>

                        <View>
                            <Text>Resell Price($)</Text>
                            <TextInput
                            onChangeText={ value => this.props.clothingUpdated({ prop: 'resellPrice', value })}
                            />
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Buyer:</Text>
                            <TextInput
                            onChangeText={ value => this.props.clothingUpdated({ prop: 'resellPrice', value })}
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
                            <Text>SAVE</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
        buyer,
        sellDate,
        otherInfo
        } = state.addClothing;

    return {
        name,
        size,
        retailPrice,
        resellPrice,
        brand,
        condition,
        buyer,
        sellDate,
        otherInfo
    };
}

export default connect(mapStateToProps, {
    clothingCreate,
    clothingUpdated
})(AddClothing);