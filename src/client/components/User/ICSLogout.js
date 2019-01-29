import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  AsyncStorage,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
  View,
  Alert
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';


import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSLogin extends Component {

  state ={ isLoading:true, firstName:'user'}
  constructor(){
    super();
    
    this.state = {
      isLoading:true,
      firstName: "user"
    }
  }

  async removeItemValue() {
    try {
      await AsyncStorage.removeItem('userObj');
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  async getKey() {
    try {
      const valueU = await AsyncStorage.getItem('userObj');
      const users = JSON.parse(valueU);
      this.setState({firstName: users['user1'].firstName});

    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  logout(){
    this.removeItemValue().then(() =>{
          Alert.alert(
              'Logged out!',
              'You are now logged out.',
              [
                {text: 'Ok', onPress: () => Actions.loginScene(), style: 'cancel'},
              ],
              { cancelable: false }
            )
        
      })
    

  }

  home(){
    Actions.homeScene();

  }

  saveData(key, value){
    try{
            AsyncStorage.setItem(key, value);
          }
          catch(error)
          {
            console.error('AsyncStorage error : ' + error.message);
          }
  }

  componentDidMount(){
    this.getKey().then(() =>{
        this.setState({
          isLoading: false
        }, function(){
        });
      })
  }

  render() {
    return (
      <ICSPage>
        <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>Hello</Text>
          <Text style={ICSStyles.titleText}>{this.state.firstName}</Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Are you sure you want to logout? </Text>
          
        <View style={ICSStyles.inputWrapper}>
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.loginButton}
            onPress={() => this.logout()}
            title="Logout"
          />
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.registerButton}
            onPress={() => this.home()}
            title="Cancel"
          />
        
        </View>
      
      </ICSPage>
    );
  }
}