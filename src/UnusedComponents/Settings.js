import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { signOut } from "../actions/AuthActions";

class Settings extends Component {

    render() {

        const { signOutStyle } = styles;

        return (
            <View>
                <View style={{  padding: 10 }}>
                    <TouchableOpacity
                    style={ signOutStyle }
                    OnPress={ this.props.signOut() }
                    >
                        <Text
                        style={{ fontSize: 22, color: '#ffffff'}}
                        >Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
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

export default connect(null, { signOut })(Settings);