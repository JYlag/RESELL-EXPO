import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ShoesItem extends Component {

    state = { expanded: false };

    changeExpanded(expanded) {
        this.setState({ expanded: !expanded })
    }

    renderInformation() {

        const { shoe } = this.props;

        const { shoeSectionStyle, shoeCategoryTextStyle, shoeTextStyle } = styles;

        if ( this.state.expanded ) {
            return(
              <View style={{ flexDirection: 'column', backgroundColor: '#ffffff'}}>
                  <View>
                      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Size </Text>
                              <Text style={ shoeTextStyle }>{ shoe.size }</Text>
                          </View>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Brand</Text>
                              <Text style={ shoeTextStyle }>{ shoe.brand }</Text>
                          </View>
                      </View>
                      <View style={{ flexDirection: 'row'}}>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Condition</Text>
                              <Text style={ shoeTextStyle }>{ shoe.condition }</Text>
                          </View>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Buyer</Text>
                              <Text style={ shoeTextStyle }> { shoe.buyer }</Text>
                          </View>
                      </View>
                  </View>

                  <View style={{ borderWidth: 1, borderColor: '#e6e6e6', marginVertical: 20, marginHorizontal: 10 }} />

                  <View>
                      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Retail Price</Text>
                              <Text style={ shoeTextStyle }>${ shoe.retailPrice }</Text>
                          </View>
                          <View style={ shoeSectionStyle }>
                              <Text style={ shoeCategoryTextStyle }>Resell Price</Text>
                              <Text style={ shoeTextStyle }>${ shoe.resellPrice }</Text>
                          </View>
                      </View>
                  </View>
              </View>
            );
        }
    }

    render() {

        const { name } = this.props.shoe;

        const { infoSectionStyle, itemTitle } = styles;

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
    shoeSectionStyle: {
        flex: 1
    },
    shoeCategoryTextStyle: {
        fontSize: 18,
        fontWeight: '800',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    shoeTextStyle: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
}

export default ShoesItem;