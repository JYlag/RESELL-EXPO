import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View, Text, Image } from 'react-native';

const PlusButton = ({ height, width, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require("./images/plus-filled-100.png")} style={{ height: height, width: width }}/>
        </TouchableOpacity>
    );
};

export {PlusButton};