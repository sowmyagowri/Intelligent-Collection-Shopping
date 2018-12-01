import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { AsyncStorage, KeyboardAvoidingView, FlatList, ActivityIndicator, Text, View ,StyleSheet, Button } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSProfile extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true, 
      userString:"defaultUser",
      userObj: null,
    }
  }

  async getKey() {
    try {
      const valueU = await AsyncStorage.getItem('userObj');
      this.setState({userString: valueU});
      const users = JSON.parse(valueU);
      this.setState({userObj: users['user1']});

    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentDidMount(){
    this.getKey().then(() =>{
    this.setState({isLoading: false});
    
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <ICSPage>
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
        </ICSPage>
      )
    }
    return (
      <ICSPage>
      <KeyboardAvoidingView behavior="padding" style={ICSStyles.loginInputContainer}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={ICSStyles.profileInfo}>{this.state.userObj.userId}</Text>
          <Text style={ICSStyles.profileInfo}>{this.state.userObj.firstName}</Text>
          <Text style={ICSStyles.profileInfo}>{this.state.userObj.lastName}</Text>
          <Text style={ICSStyles.profileInfo}>{this.state.userObj.userAddress}</Text>
          <Text style={ICSStyles.profileInfo}>{this.state.userObj.contactNumber}</Text>
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
    );
  }
}