import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 0,
        backgroundColor: '#1565C0',
        borderRadius: 5,
        marginTop: 5,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 1
    },

    textStyle: {
        alignSelf: 'center',
        color: '#F5F5F5',
        fontWeight: '500',
        paddingVertical: 2,
        paddingHorizontal: 5
    }

};

export { SmallButton };