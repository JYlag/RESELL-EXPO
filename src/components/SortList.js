import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

class SortList extends Component {

    render() {
        return (
          <ModalDropdown options={[
            'Active',
            'Sold',
            'All'
          ]}
          />
        );
    }
}

export default SortList;

