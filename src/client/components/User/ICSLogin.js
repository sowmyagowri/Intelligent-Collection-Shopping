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

  state ={ isLoading:true, user1: {}, uId:'', pwd:'',  myKey: '123'}
  constructor(){
    super();
    
    this.state = {
      uId: "",
      pwd: "",
	  myKey: '123',
    }
    this.handleUid = this.handleUid.bind(this);
    this.handlePwd = this.handlePwd.bind(this)
    this.login = this.login.bind(this);
  }

  handleUid = (text) => {
      this.setState({ uId: text })
  }
  handlePwd = (text) => {
      this.setState({ pwd: text })
  }
  
  register(){
    Actions.registerScene();
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

  login(uid, pass){

    console.log("in login")
    return fetch('http://172.27.238.145:5000/users1/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: uid,
          userPassword: pass,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(!responseJson.error)
        {
          this.saveData('userObj', JSON.stringify(responseJson));
          Actions.homeScene();
        }
        else
        {
          Alert.alert(
              'Invalid Login',
              'User id or password are incorrect.',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              ],
              { cancelable: false }
            )
        }
      })
      .catch((error) =>{
        console.error(error);
        
      });
  }

  render() {
    return (
      <ICSPage>
      
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
            onChangeText={this.handleUid}
          />
		  <Text></Text>
          <Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handlePwd}
          />
		  <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.loginButton}
            onPress={() => this.login(this.state.uId, this.state.pwd)}
            title="Login"
          />
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.registerButton}
            onPress={() => this.register()}
            title="Register"
          />
        </View>
      
      </ICSPage>
    );
  }
}