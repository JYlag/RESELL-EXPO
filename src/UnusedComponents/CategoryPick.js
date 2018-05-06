import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {BottomNav} from '../components/common/BottomNav';
import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

class CategoryPick extends Component {
    render() {

        const { containerStyle, sectionStyle, categoryStyle, categoryTitleStyle, iconStyle } = styles;

        return (
            <View style={ containerStyle }>
                <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, textAlignVertical: 'center' }}> Select Category </Text>
                </View>

                <View style={{ flex: 15, flexDirection: 'column' }}>
                    <View style={ sectionStyle }>
                        <View style={[ categoryStyle, {backgroundColor: '#3F51B5'} ]}>
                            <Text style={ categoryTitleStyle }>Tickets</Text>
                            <View style={ iconStyle }>
                                <TouchableOpacity
                                onPress={ () => { Actions.inventory() } }
                                style={{ flex:1 }}
                                >
                                    <MaterialCommunityIcon
                                    size={100}
                                    color="#E3F2FD"
                                    name="ticket-account"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> /* Tickets Category Section */

                        <View style={[ categoryStyle, { backgroundColor: '#F44336'} ]}>
                            <Text style={ categoryTitleStyle }>Kicks</Text>
                            <View style={ iconStyle }>
                                <TouchableOpacity
                                    onPress={ () => { } }
                                    style={{ flex:1 }}
                                >
                                    <MaterialCommunityIcon
                                        size={80}
                                        color="#E3F2FD"
                                        name="kickstarter"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> /* Kicks Category Section */
                    </View>

                    <View style={ sectionStyle }>
                        <View style={[ categoryStyle, { backgroundColor: '#9C27B0'} ]}>
                            <Text style={ categoryTitleStyle }>Clothing</Text>
                            <View style={ iconStyle }>
                                <TouchableOpacity
                                    onPress={ () => { } }
                                    style={{ flex:1 }}
                                >
                                    <Ionicon
                                        size={80}
                                        color="#E3F2FD"
                                        name="md-shirt"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> /* Clothing Category Section */

                        <View style={[ categoryStyle, { backgroundColor: '#00BCD4'} ]}>
                            <Text style={ categoryTitleStyle }>Electronics</Text>
                            <View style={ iconStyle }>
                                <TouchableOpacity
                                    onPress={ () => { } }
                                    style={{ flex:1 }}
                                >
                                    <MaterialCommunityIcon
                                        size={80}
                                        color="#E3F2FD"
                                        name="laptop-windows"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View> /* Electronics Category Section */
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#E3F2FD',
        flex: 1,
        flexDirection: 'column'
    },
    sectionStyle: {
        flex: 1,
        borderWidth: 0,
        flexDirection: 'row'
    },
    categoryStyle: {
        flex: 1,
        borderWidth: 0
    },
    categoryTitleStyle: {
        alignSelf: 'center',
        color: '#E3F2FD',
        position: 'absolute',
        marginTop: 15,
        fontSize: 23
    },
    iconStyle: {
        alignItems: 'center',
        marginTop: '50%',
        flex: 1,
        shadowOffset: { width: 0, height: 0.8},
        shadowOpacity: 0.5,
        shadowRadius: 2

    }
}

export default CategoryPick;