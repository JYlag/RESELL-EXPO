import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { Actions } from 'react-native-router-flux';
import AddTickets from "./components/AddItem/AddTickets";
import Add from 'react-native-vector-icons/MaterialCommunityIcons'
import {TouchableWithoutFeedback} from "react-native";
import Main from "./components/Main";
import TicketInventory from "./components/Inventories/TicketInventory";
import ShoesInventory from "./components/Inventories/ShoesInventory";
import AddShoes from "./components/AddItem/AddShoes";
import ElectronicsInventory from "./components/Inventories/ElectronicsInventory";
import AddElectronics from "./components/AddItem/AddElectronics";
import AddClothing from "./components/AddItem/AddClothing";
import ClothingInventory from "./components/Inventories/ClothingInventory";

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
              <Scene key="main">
                  <Scene // Main Category/Settings
                  key="mainSec"
                  component={Main}
                  title="ReSell"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene // Ticket Inventory
                  renderRightButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.add_ticket() }}>
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
                  key="ticket_inventory"
                  component={TicketInventory}
                  title="Tickets"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene // Shoes Inventory
                  renderRightButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.add_shoes() }}>
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
                  key="shoes_inventory"
                  component={ShoesInventory}
                  title="Shoes"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene // Electronics Inventory
                  renderRightButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.add_electronics() }}>
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
                  key="electronics_inventory"
                  component={ElectronicsInventory}
                  title="Electronics"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene // Clothing Inventory
                  renderRightButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.add_clothing() }}>
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
                  key="clothing_inventory"
                  component={ClothingInventory}
                  title="Clothing"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  />
                  <Scene // Add Ticket
                  key="add_ticket"
                  component={AddTickets}
                  title="Add Ticket"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.ticket_inventory() } }>
                          <Add
                              size={36}
                              color="#E3F2FD"
                              name="arrow-left"
                              style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  />
                  <Scene // Add Shoes
                  key="add_shoes"
                  component={AddShoes}
                  title="Add Shoes"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.shoes_inventory() } }>
                          <Add
                              size={36}
                              color="#E3F2FD"
                              name="arrow-left"
                              style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  />
                  <Scene // Add Electronics
                  key="add_electronics"
                  component={AddElectronics}
                  title="Add Item"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.electronics_inventory() } }>
                          <Add
                              size={36}
                              color="#E3F2FD"
                              name="arrow-left"
                              style={{ marginHorizontal: 10}}
                          />
                      </TouchableWithoutFeedback>
                  }
                  />
                  <Scene // Add Clothing
                  key="add_clothing"
                  component={AddClothing}
                  title="Add Clothing"
                  navigationBarStyle={{ backgroundColor: '#1976D2' }}
                  titleStyle={{  color: '#E3F2FD' }}
                  renderLeftButton={
                      <TouchableWithoutFeedback onPress={ () => { Actions.clothing_inventory() } }>
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