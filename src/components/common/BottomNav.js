import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

const BottomNav = ({ activeTab, onTabChange }) => {

    const { navStyle } = styles;

    return (
      <BottomNavigation
      activeTab={activeTab}
      backgroundColor="#42A5F5"
      labelColor="#E3F2FD"
      style={ navStyle }
      onTabChange={ onTabChange }
      >
          <Tab
          label="Categories"
          icon={<Icon size={24} color="#E3F2FD" name="filter-variant" />}
          />
          <Tab
          label="Settings"
          icon={<Icon size={24} color="#E3F2FD" name="settings" />}
          />
      </BottomNavigation>
    );
}

const styles = {
    navStyle: {
        flex: 1
    }
}

export { BottomNav };