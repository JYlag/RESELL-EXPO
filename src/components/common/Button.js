import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

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
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#43A047',
      marginLeft: 5,
      marginRight: 5,
      shadowRadius: 0,
      shadowOpacity: 0,
      shadowOffset: { width: 0, height: 1}
  },

  textStyle: {
      alignSelf: 'center',
      color: '#F5F5F5',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
  }

};

export { Button };