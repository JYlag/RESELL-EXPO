import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import {CardSection} from "../common/CardSection";
import ModalDropdown from 'react-native-modal-dropdown';
import {Button} from "../common/Button";
import { Actions } from 'react-native-router-flux';

class AddItem extends Component {

    onButtonPress() {
        Actions.addItem();
    }

    render() {
        return (
            <View>
            <CardSection>
                <View>
                    <Text>What're you selling?</Text>
                    <ModalDropdown options={[
                        "Tickets",
                        "Shoes"
                    ]}
                    />
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={ this.onButtonPress.bind(this) }>
                    Next
                </Button>
            </CardSection>
            </View>
        );
    }
}

export default AddItem;