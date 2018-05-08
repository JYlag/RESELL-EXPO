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
        return (
          <View>
              <View>
                  <TextInput
                  placeholder="Enter Name Here"
                  onChangeText={ value => this.props.electronicsUpdated({ prop: 'name', value}) }
                  />
              </View>

              <View>
                  <Dropdown
                  label="Condition"
                  data={ this.props.electronicCondData }
                  />
              </View>

              <View>
                  <View>
                      <Text>Brand</Text>
                      <TextInput
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'brand', value}) }
                      />
                  </View>
                  <View>
                      <Text>Other Information:</Text>
                      <TextInput
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'otherInfo', value}) }
                      />
                  </View>
              </View>

              <View>
                  <View>
                      <Text>Retail Price($)</Text>
                      <TextInput
                      keyboard="numeric"
                      onChangeText={ value => this.props.electronicsUpdated({ prop: 'retailPrice', value}) }
                      />
                  </View>

                  <View>
                      <Text>Resell Price($)</Text>
                      <TextInput
                          keyboard="numeric"
                          onChangeText={ value => this.props.electronicsUpdated({ prop: 'resellPrice', value}) }
                      />
                  </View>
              </View>

              <View>
                  <View>
                      <Text>Sold To:</Text>
                      <TextInput
                      onChangeText={ value => this.props.electronicsUpdated({ prop: 'seller', value }) }
                      />
                  </View>

                  <View>
                      { this.renderSellDate() }
                  </View>
              </View>

              <View>
                  <TouchableWithoutFeedback onPress={ this.onButtonPress.bind(this)}>
                      <View>
                          <Text>
                              SAVE
                          </Text>
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