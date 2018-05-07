import React, { Component } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback} from 'react-native';
import { PlusButton, MinusButton } from "../common";
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import {
    ticketUpdated,
    ticketCreate
} from "../../actions/ItemActions/TicketActions";

class AddTickets extends Component {

    state = {
        sellDate: "",
        eventDate: "",
    };

    onButtonPress() {

        const {
            eventName,
            quantity,
            retailPrice,
            resellPrice,
            section,
            row,
            seat,
            otherInfo
        } = this.props;

        const {
            eventDate,
            sellDate
        } = this.state;

        this.props.ticketCreate({
            eventName,
            quantity,
            retailPrice,
            resellPrice,
            section,
            row,
            seat,
            otherInfo,
            eventDate,
            sellDate
        });
    }

    onQuantityPlusPress(currentQuantity) {

        newQuantity = currentQuantity + 1;

        this.props.ticketUpdated({ prop: 'quantity', value: newQuantity});

        console.log(newQuantity);
    }

    onQuantityMinusPress(currentQuantity) {

        newQuantity = currentQuantity - 1;

        this.props.ticketUpdated({prop: 'quantity', value: newQuantity});

        console.log(newQuantity);
    }

    renderEventDate() {
        if ( this.state.eventDate === "" ) {
            return <DatePicker
                format="MM/DD/YYYY"
                placeholder="Select Date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={ (date) => this.setState({eventDate: date})}
            />
        }
        else {
            return <DatePicker
                date={this.state.eventDate}
                format="MM/DD/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={ (date) => this.setState({eventDate: date})}
            />
        }
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
            inputStyle,
            backgroundStyle,
            containerStyle,
            smallInputStyle,
            componentStyle,
            seatInputStyle,
            seatText,
            buttonStyle,
            dateTextStyle
        } = styles;

        return (
            <View style={ backgroundStyle }>
                <View style={ containerStyle }>
                    <View style={{ flexDirection: 'column', borderBottomWidth: 1, borderColor: '#e6e6e6'}}>
                    <TextInput
                        placeholder="Enter Event Name"
                        style={[ inputStyle, { marginLeft: 10 } ]}
                        onChangeText={ value => this.props.ticketUpdated({ prop: 'eventName', value })}
                    />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#e6e6e6'}}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 25, marginTop: 15 }}>
                            <Text style={{ marginTop: 5}}>Quantity</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <MinusButton height={ 40 } width={ 40 }
                                 onPress={this.onQuantityMinusPress.bind(this, this.props.quantity)}
                                />
                                <TextInput
                                    keyboardType='numeric'
                                    style={ smallInputStyle }
                                    value={this.props.quantity.toString()}
                                    label="Quantity"
                                    editable={false}
                                />
                                <PlusButton height={ 40 } width={ 40 }
                                 onPress={this.onQuantityPlusPress.bind(this, this.props.quantity)}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={ componentStyle}>
                                <Text style={dateTextStyle}>Event Date:</Text>
                                {this.renderEventDate()}
                            </View>
                            <View style={ componentStyle}>
                                <Text style={{ marginTop: 5}}>Retail Price($)</Text>
                                <TextInput
                                    onChangeText={ value => this.props.ticketUpdated({ prop: 'retailPrice', value })}
                                    keyboardType="numeric"
                                    style={ smallInputStyle }
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row',  borderBottomWidth: 1, borderColor: '#e6e6e6' }}>
                            <View style={ componentStyle }>
                                <Text style={dateTextStyle}>Sell Date:</Text>
                                {this.renderSellDate()}
                            </View>
                            <View style={ componentStyle }>
                                <Text style={{ marginTop: 5}}>Sold($)</Text>
                                <TextInput
                                    onChangeText={ value => this.props.ticketUpdated({ prop: 'resellPrice', value })}
                                    keyboardType="numeric"
                                    style={ smallInputStyle }
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={{ marginLeft: 10, marginTop: 10 }}>Seat Information:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={seatText}>
                                    <Text>SEC</Text>
                                    <TextInput
                                    onChangeText={ value => this.props.ticketUpdated({ prop: 'section', value })}
                                    style={ seatInputStyle }
                                    returnKeyType="done"
                                    />
                                </View>
                                <View style={seatText}>
                                    <Text>ROW</Text>
                                    <TextInput
                                    onChangeText={ value => this.props.ticketUpdated({ prop: 'row', value })}
                                    style={ seatInputStyle }
                                    returnKeyType="done"
                                    />
                                </View>
                                <View style={seatText}>
                                    <Text>SEAT</Text>
                                    <TextInput
                                    onChangeText={ value => this.props.ticketUpdated({ prop: 'seat', value })}
                                    style={ seatInputStyle }
                                    returnKeyType="done"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column'}} >
                        <Text style={{ marginLeft: 10 }}>Other Information:</Text>
                        <View style={{
                            margin: 10,
                            height: 100,
                            borderWidth: 1,
                            borderRadius: 2,
                            borderColor: '#e6e6e6'
                        }}>
                            <TextInput
                            onChangeText={ value => this.props.ticketUpdated({ prop: 'otherInfo', value })}
                            multiline={true}
                            returnKeyType="done"
                            style={{ height: 100 }}
                            />
                        </View>
                    </View>

                    <View>
                        <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
                            <View style={ buttonStyle }>
                                <Text style={{ fontSize: 18, color: 'white'}}>
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
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 2
    },
    inputStyle: {
        borderRadius: 2,
        backgroundColor: '#fbfbfb',
        height: 45,
        fontSize: 20
    },
    smallInputStyle: {
        width: 70,
        height: 45,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#e6e6e6',
        textAlign: 'center',
        marginHorizontal: 25
    },
    componentStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
    },
    seatInputStyle: {
        width: 65,
        height: 25,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 2

    },
    seatText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    buttonStyle: {
        backgroundColor: '#82b7fc',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#82b7fc',
        height: 45,
        marginHorizontal: 10,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateTextStyle: {
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginBottom: 5
    }
}

const mapStateToProps = (state) => {

    const { eventName, quantity, retailPrice, resellPrice, section, row, seat, otherInfo } = state.addTickets;

    return { eventName, quantity, retailPrice, resellPrice, section, row, seat, otherInfo };

};

export default connect(mapStateToProps, { ticketUpdated, ticketCreate })(AddTickets);