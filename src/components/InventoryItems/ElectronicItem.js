import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ElectronicItem extends Component {

    state = { expanded: false };

    changeExpanded(expanded) {
        this.setState({ expanded: !expanded })
    }

    renderInformation() {
        if ( this.state.expanded ) {
            return(
                <View>
                    <Text>EXPANDED</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View>
                        <View>
                            <Text>TESTING</Text>
                        </View>
                        <View>
                            <Text>ELECTRONICS NAME</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                { this.renderInformation() }
            </View>
        );
    }

}

const styles = {

}

export default ElectronicItem;