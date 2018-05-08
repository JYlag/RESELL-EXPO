import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchClothing } from "../../actions/ItemActions/ClothingActions";
import _ from 'lodash';
import ClothingItem from "../InventoryItems/ClothingItem";


class ElectronicsInventory extends Component {

    componentWillMount() {
        this.props.fetchClothing();

        this.createDataSource( this.props );
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props
        // that this component will be rendered
        // with this.props is still the old sets of props
        this.createDataSource(nextProps)
    }

    createDataSource({ clothing }) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(clothing);
    }

    renderRow(item) {
        return <ClothingItem item={ item } />
    }

    render() {
        return (
            <View style={ styles.containerStyle }>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    style={{ }}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#42A5F5',
    }
}

const mapStateToProps = state => {
    const clothing = _.map(state.items, ( val, uid ) => {
        return {...val, uid};
    });

    return { clothing };
};

export default connect(mapStateToProps, { fetchClothing })(ElectronicsInventory);
