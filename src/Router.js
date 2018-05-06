import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { Actions } from 'react-native-router-flux';
import InventoryList from "./components/InventoryList";
import AddItem from "./components/AddItem/AddItem";
import CategoryPick from "./UnusedComponents/CategoryPick";
import Settings from "./UnusedComponents/Settings";
import Add from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableWithoutFeedback} from "react-native";
import Main from "./components/Main";

const RouterComponent = () => {
    return (
      <Router>
          <Scene key="root" hideNavBar>
              <Scene key="auth">

                    <Scene
                    key="login"
                    component={LoginForm}
                    navigationBarStyle={{ backgroundColor: '#1976D2' }}
                    titleStyle={{  color: '#E3F2FD' }}
                    title="Please Login"
                    renderLeftButton={
                        <TouchableWithoutFeedback onPress={ () => {
                            Actions.auth({ type: 'reset'} )
                        }}>
                            <Add
                                size={36}
                                color="#E3F2FD"
                                name="arrow-left"
                                style={{ marginHorizontal: 10}}
                            />
                        </TouchableWithoutFeedback>
                    }
                    />

                    <Scene
                    initial
                    key="signup"
                    component={SignUpForm}
                    navigationBarStyle={{ backgroundColor: '#1976D2' }}
                    titleStyle={{  color: '#E3F2FD' }}
                    title="Create An Account"
                    />
              </Scene>
              <Scene key="main" initial>
                  <Scene
                  key="main"
                  component={Main}
                  title="ReSell"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene
                  rightTitle="Add"
                  renderRightButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.addItem() }}>
                          <Add
                            size={36}
                            color="#E3F2FD"
                            name="plus"
                            style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.main({ type: 'reset' }) }}>
                          <Add
                              size={36}
                              color="#E3F2FD"
                              name="arrow-left"
                              style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  key="inventory"
                  component={InventoryList}
                  title="Inventory"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene
                  key="addItem"
                  component={AddItem}
                  title="Add Item"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.inventory() } }>
                          <Add
                              size={36}
                              color="#E3F2FD"
                              name="arrow-left"
                              style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  />
              </Scene>
          </Scene>
      </Router>
    );
};

export default RouterComponent;