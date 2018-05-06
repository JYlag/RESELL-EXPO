import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, ListView } from 'react-native';
import { Card, CardSection} from "./common";
import { connect } from 'react-redux';
import SortList from './SortList';
import InventoryItem from "./InventoryItem";
import { fetchItems } from "../actions/ItemActions";
import _ from 'lodash';


class InventoryList extends Component {

    componentWillMount() {
        this.props.fetchItems();

        this.createDataSource( this.props );
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props
        // that this component will be rendered
        // with this.props is still the old sets of props
        this.createDataSource(nextProps)
    }

    createDataSource({ items }) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        console.log(items);

        this.dataSource = ds.cloneWithRows(items);
    }

    renderRow(item) {
        return <InventoryItem item={ item } />
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
    const items = _.map(state.items, ( val, uid ) => {
       return {...val, uid};
    });

    console.log(items);

    return { items };
};

export default connect(mapStateToProps, { fetchItems })(InventoryList);
