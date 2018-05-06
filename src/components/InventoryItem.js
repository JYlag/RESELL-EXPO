import React, { Component } from 'react';
import { Text, View, LayoutAnimation, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {CardSection} from "./common/CardSection";
import { selectedItem } from "../actions/ItemActions";
import { connect } from 'react-redux';

class InventoryItem extends Component {

    state = { expanded: false };

    componentDidUpdate() {
        //LayoutAnimation.spring();

    }

    changeExpanded(expanded) {
        this.setState({ expanded: !expanded })
    }

    renderDescription() {

        const { item } = this.props;

        const {
            sectionContainer,
            dateRowStyle,
            ticketInfoStyle,
            ticketCategoryStyle,
            ticketSeatInfoStyle,
            priceRowStyle,
            ticketSectionStyle,
            sectionTextStyle
        } = styles;

        if ( this.state.expanded ) {
            return (
                <CardSection style={{ flexDirection: 'column'}}>
                    <View style={ dateRowStyle }>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Event Date</Text>
                            <Text style={ ticketSectionStyle }>
                                { item.eventDate }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Sold Date</Text>
                            <Text style={ ticketSectionStyle }>
                                { item.sellDate }
                            </Text>
                        </View>
                    </View>

                    <View style={ ticketInfoStyle }>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>SEC</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { item.section }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>ROW</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { item.row }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ticketCategoryStyle}>SEAT</Text>
                            <Text style={ticketSeatInfoStyle}>
                                { item.seat }
                            </Text>
                        </View>
                    </View>

                    <View style={ priceRowStyle }>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Retail Price</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ item.retailPrice }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Resell Price</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ item.resellPrice }
                            </Text>
                        </View>
                        <View style={sectionContainer}>
                            <Text style={ sectionTextStyle }>Total Profit</Text>
                            <Text style={ ticketSectionStyle }>
                                ${ item.resellPrice - item.retailPrice}
                            </Text>
                        </View>
                    </View>

                </CardSection>
            );
        }
    }

    render() {

        const { eventName} = this.props.item;

        const { itemTitle, infoSectionStyle } = styles;

        return (
            <View>
                <TouchableOpacity onPress={ this.changeExpanded.bind(this, this.state.expanded) }>
                    <View style={{ flexDirection: 'row',  backgroundColor: '#E3F2FD', borderBottomWidth: 1, borderColor: '#fff', padding: 10,  flex: 1 }}>
                        <View style={ { justifyContent: 'center'} }>
                            <Text>
                                TESTING
                            </Text>
                        </View>
                        <View style={ infoSectionStyle }>
                            <Text style={ itemTitle }>
                                { eventName }
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                { this.renderDescription() }
            </View>

        );
    }
}

const styles = {
    sectionContainer: {
        flex: 1,
        marginVertical: 10
    },
    ticketSectionStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    dateRowStyle: {
        flexDirection: 'row'
    },
    ticketInfoStyle: {
        flexDirection: 'row'

    },
    ticketCategoryStyle: {
        fontSize: 35,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ticketSeatInfoStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    priceRowStyle: {
        flexDirection: 'row'
    },
    sectionTextStyle: {
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    infoSectionStyle: {
        alignItems: 'center',
        flex: 1
    },
    itemTitle: {
        fontSize: 20,
    },
    itemDate: {
        fontSize: 13
    }
};

export default connect(null, { selectedItem })(InventoryItem);