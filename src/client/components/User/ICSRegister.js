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
  Alert,
  YellowBox
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';


import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSRegister extends Component {

  state ={ isLoading:true, user1: {}, uId:'', pwd:'', firstName:'', lastName:'',contactNumber:'',address:''}
  constructor(){
    super();
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: isMounted(...) is deprecated',
      'Warning: isMounted is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Each child in an array or iterator should have a unique "key" prop.',
    ]); 
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
    return fetch('http://10.250.211.239:5000/users1/register', {
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
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>Intelligent Collection Shopping </Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Register to proceed </Text>
          
          <Text></Text><Text></Text>
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
          <Text></Text>
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
          <Text></Text>
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
          <Text></Text>
	  <TextInput
            style={ICSStyles.input}
            placeholder="Zip code"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleAddress}
          />
          <Text></Text>
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
