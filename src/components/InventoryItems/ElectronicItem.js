import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ElectronicItem extends Component {

    state = { expanded: false };

    changeExpanded(expanded) {
        this.setState({ expanded: !expanded })
    }

    renderInformation() {

        const { item } = this.props;

        const { itemTextStyle, itemCategoryTextStyle, itemSectionStyle } = styles;
        if ( this.state.expanded ) {
            return(
                <View style={{ flexDirection: 'column', backgroundColor: '#ffffff'}}>
                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Brand</Text>
                            <Text style={ itemTextStyle }>{item.brand}</Text>
                        </View>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Condition</Text>
                            <Text style={ itemTextStyle }>{ item.condition }</Text>
                        </View>
                    </View>

                    <View  style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Buyer</Text>
                            <Text style={ itemTextStyle }>{ item.buyer }</Text>
                        </View>

                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Sold On</Text>
                            <Text style={ itemTextStyle }>{ item.sellDate }</Text>
                        </View>
                    </View>

                    <View  style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Retail Price</Text>
                            <Text style={ itemTextStyle }>${ item.retailPrice }</Text>
                        </View>

                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Resell Price</Text>
                            <Text style={ itemTextStyle }>${ item.resellPrice }</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Profit</Text>
                            <Text style={ itemTextStyle }>${ item.resellPrice - item.retailPrice }</Text>
                        </View>
                        <View style={ itemSectionStyle }>
                            <Text style={ itemCategoryTextStyle }>Sold On</Text>
                            <Text style={ itemTextStyle }>{ item.sellDate }</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={ itemCategoryTextStyle }>Other Information</Text>
                        <Text style={ itemTextStyle }> {item.otherInfo} </Text>
                    </View>
                </View>
            );
        }
    }

    render() {

        const { infoSectionStyle, itemTitle } = styles;

        const { name } = this.props.item;

        return (
            <View>
                <TouchableOpacity onPress={ this.changeExpanded.bind(this, this.state.expanded) }>
                    <View style={{ flexDirection: 'row',  backgroundColor: '#E3F2FD', borderBottomWidth: 1, borderColor: '#fff', padding: 10,  flex: 1 }}>
                        <View style={ { justifyContent: 'center'} }>
                            <Text>TESTING</Text>
                        </View>
                        <View style={ infoSectionStyle }>
                            <Text style={ itemTitle }>
                                { name }
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                { this.renderInformation() }
            </View>
        );
    }

}

const styles = {
    infoSectionStyle: {
        alignItems: 'center',
        flex: 1
    },
    itemTitle: {
        fontSize: 20,
    },
    itemSectionStyle: {
        flex: 1
    },
    itemCategoryTextStyle: {
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    itemTextStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
}

export default ElectronicItem;