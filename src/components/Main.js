import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Settings from "../UnusedComponents/Settings";
import {BottomNav} from "./common/BottomNav";
import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { signOut } from "../actions/AuthActions";


class Main extends Component {

    state = { activeTab: 0 };

    renderScene() {
        if ( this.state.activeTab === 0 ) {

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
                                        onPress={ () => { Actions.ticket_inventory() } }
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
                                        onPress={ () => { Actions.shoes_inventory() } }
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
                                        onPress={ () => { Actions.clothing_inventory() } }
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
                                        onPress={ () => { Actions.electronics_inventory() } }
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
                </View> // CategoryPick Component
           );
        }
        else {

            return(
                <View>
                    <View style={{  padding: 10 }}>
                        <TouchableOpacity
                            style={ styles.signOutStyle }
                        >
                            <Text
                                style={{ fontSize: 22, color: '#ffffff'}}
                            >Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View> // Settings Component
            );
        }
    }

    render() {

        const { bottomNavStyle } = styles;

        console.log( this.state.activeTab );

        return (
            <View style={{ flex: 1}}>

                { this.renderScene() }

                <View style={ bottomNavStyle }>
                    <BottomNav
                    activeTab={this.state.activeTab}
                    onTabChange={ ( newTabIndex ) => { this.setState({ activeTab: newTabIndex }) }}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    bottomNavStyle: {
        height: 56,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
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

    },
    signOutStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderRadius: 3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0.8,
        shadowOpacity: 0.5,
        backgroundColor: '#F44336'
    }
}

export default connect(null, { signOut })(Main);
