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

export default class ICSRegister extends Component {

  state ={ isLoading:true, user1: {}, uId:'', pwd:'', firstName:'', lastName:'',contactNumber:'',address:''}
  constructor(){
    super();
    
  }

  handleUid = (text) => {
      this.setState({ uId: text })
  }
  handlePwd = (text) => {
      this.setState({ pwd: text })
  }
  handleFirst = (text) => {
      this.setState({ firstName: text })
  }
  handleLast = (text) => {
      this.setState({ lastName: text })
  }
  handleContact = (text) => {
      this.setState({ contactNumber: text })
  }
  handleAddress = (text) => {
      this.setState({ address: text })
  }

  register(uid, pass, first, last, contact, address){
    return fetch('http://192.168.1.128:5000/users1/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: uid,
          userPassword: pass,
          firstName: first,
          lastName: last,
          contactNumber: contact,
          userAddress: address,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(!responseJson.error)
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
          <Text>{'User Registration! '}</Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="user id"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleUid}
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
            onChangeText={this.handlePwd}
          />
	 <TextInput
            style={ICSStyles.input}
            placeholder="first name"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleFirst}
          />
	  <TextInput
            style={ICSStyles.input}
            placeholder="last name"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleLast}
          />
	 <TextInput
            style={ICSStyles.input}
            placeholder="contact number"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleContact}
          />
	  <TextInput
            style={ICSStyles.input}
            placeholder="address"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleAddress}
          />
          <Button
            style={ICSStyles.registerButton}
            onPress={() => this.register(this.state.uId, this.state.pwd, this.state.firstName, this.state.lastName, this.state.contactNumber, this.state.address)}
            title="Register"
          />
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
    );
  }
}
