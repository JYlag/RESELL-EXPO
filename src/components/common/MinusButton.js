import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

const MinusButton = ({ height, width, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require("./images/minus-filled-100.png")} style={{ height: height, width: width }}/>
        </TouchableOpacity>
    );
};

export {MinusButton};