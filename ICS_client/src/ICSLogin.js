import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
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

  constructor(){
    super();
    this.state ={ isLoading:true, user1: {}};
  }


  async fetchData(): Promise<void>{
    try{
      const response = await fetch('http://192.168.1.128:5000/users1/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: 'test1',
          userPassword: 'test1',
        }),
      })
      const json = await response.json();
      const user1 = json.user1;
      await this.promisedSetState({user1:user1});
      if(this.state.user1)
      {
        Actions.homeScene();
      }
    }
    catch(err)
    {
      return error(err);
    }
  }

  promisedSetState = (newState) => {
        return new Promise((resolve) => {
            this.setState(newState, () => {
                resolve()
            });
        });
  }

  onPress1() {
    (async () => {
      await this.fetchData().done();
    })();
  }
  onPress(){
    return fetch('http://192.168.1.128:5000/users1/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: 'test1',
          userPassword: 'test2',
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson)
        {
          Actions.homeScene();
        }
      })
      .catch((error) =>{
        console.error(error);
        
      });
  }



  render() {
    return (
      <ICSPage>
      <KeyboardAvoidingView behavior="padding" style={ICSStyles.loginInputContainer}>
        <View style={ICSStyles.inputWrapper}>
          <TextInput
            style={ICSStyles.input}
            placeholder="username"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={ICSStyles.input}
            placeholder="password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
          <Button
            style={ICSStyles.loginButton}
            onPress={this.onPress}
            title="Login"
          />
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
    );
  }
}
