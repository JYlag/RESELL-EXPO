import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ShoesItem from "../InventoryItems/ShoesItem";
import { fetchShoes } from "../../actions/ItemActions/ShoesActions";
import _ from 'lodash';


class TicketInventory extends Component {

    componentWillMount() {
        this.props.fetchShoes();

        this.createDataSource( this.props );
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props
        // that this component will be rendered
        // with this.props is still the old sets of props
        this.createDataSource(nextProps)
    }

    createDataSource({ shoes }) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(shoes);
    }

    renderRow(shoe) {
        return <ShoesItem shoe={ shoe } />
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
    const shoes = _.map(state.items, ( val, uid ) => {
        return {...val, uid};
    });

    console.log(shoes);

    return { shoes };
};

export default connect(mapStateToProps, { fetchShoes })(TicketInventory);
