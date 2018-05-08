import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TextInput } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import {
    electronicsCreate,
    electronicsUpdated
} from "../../actions/ItemActions/ElectronicsActions";

class AddElectronics extends Component {

    state = { sellDate: "" };

    onButtonPress() {
        const {
            name,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer,
            otherInfo
        } = this.props;

        const { sellDate } = this.state;

        this.props.electronicsCreate({
            name,
            retailPrice,
            resellPrice,
            brand,
            condition,
            buyer,
            otherInfo,
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

        const {  backgroundStyle, containerStyle, inputStyle, infoSection, smallInputStyle, buttonStyle } = styles;

        return (
          <View style={ backgroundStyle }>
              <View style={ containerStyle }>
                  <View>
                      <TextInput
                      placeholder="Enter Name Here"
                      onChangeText={ value => this.props.electronicsUpdated({ prop: 'name', value}) }
                      style={ inputStyle }
                      />
                  </View>

                  <View>
                      <Dropdown
                      label="Condition"
                      data={ this.props.electronicCondData }
                      containerStyle={{ width: '90%', alignSelf: 'center' }}
                      />
                  </View>

                  <View style={ infoSection }>
                      <View style={{ marginVertical: 10 }}>
                          <Text>Brand</Text>
                          <TextInput
                              onChangeText={ value => this.props.electronicsUpdated({ prop: 'brand', value}) }
                              style={{ borderBottomWidth: 1, borderColor: '#e6e6e6', width: 150, marginVertical: 5 }}
                          />
                      </View>
                      <View>
                          <Text>Other Information:</Text>
                          <View style={{ flexDirection: 'row'}}>
                              <TextInput
                                  onChangeText={ value => this.props.electronicsUpdated({ prop: 'otherInfo', value}) }
                                  style={{ height: 100, flex: 1, justifyContent: 'center', borderWidth: 1, marginTop: 5 }}
                                  multiline={true}
                              />
                          </View>
                      </View>
                  </View>

                  <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                      <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center' }}>
                          <Text>Retail Price($)</Text>
                          <TextInput
                          keyboard="numeric"
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'retailPrice', value}) }
                          style={ smallInputStyle }
                          />
                      </View>

                      <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center' }}>
                          <Text>Resell Price($)</Text>
                          <TextInput
                          keyboard="numeric"
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'resellPrice', value}) }
                          style={ smallInputStyle }
                          />
                      </View>
                  </View>

                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{ flexDirection: 'row' }}>
                          <Text>Sold To:</Text>
                          <TextInput
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'seller', value }) }
                          style={{ borderBottomWidth: 1, borderColor: '#e6e6e6', width: 150, marginHorizontal: 5 }}
                          />
                      </View>

                      <View style={{ marginVertical: 20 }}>
                          { this.renderSellDate() }
                      </View>
                  </View>

                  <View style={ buttonStyle }>
                      <TouchableWithoutFeedback onPress={ this.onButtonPress.bind(this)}>
                          <View>
                              <Text style={{ color: '#ffffff', fontSize: 18 }}>
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
    infoSection: {
        flexDirection: 'column',
        marginHorizontal: 5
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
    buttonStyle: {
        backgroundColor: '#82b7fc',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#82b7fc',
        marginHorizontal: 10,
        marginBottom: 10,
        paddingVertical: 12,
        alignItems: 'center'
    }
}

const mapStateToProps = (state) => {
    const {
        name,
        retailPrice,
        resellPrice,
        brand,
        condition,
        buyer,
        otherInfo,
        sellDate
    } = state.addElectronics;

    return {
        name,
        retailPrice,
        resellPrice,
        brand,
        condition,
        buyer,
        otherInfo,
        sellDate,
        electronicCondData: state.electronicCondData
    };
}

export default connect(mapStateToProps, {
    electronicsCreate,
    electronicsUpdated
})(AddElectronics);