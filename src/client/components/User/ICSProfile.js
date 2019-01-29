import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { AsyncStorage, KeyboardAvoidingView, FlatList, ActivityIndicator, Text, View ,StyleSheet, TouchableOpacity, YellowBox } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSProfile extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true, 
      userString:"defaultUser",
      userObj: null,
    }
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: isMounted(...) is deprecated',
      'Warning: isMounted is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Each child in an array or iterator should have a unique "key" prop.',
    ]);
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

  mofidyData(){}

  updateData(){}

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
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',}}>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>User Information </Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Manage your details </Text>
          <Text></Text>
          <Text></Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch',}}>
            <Text style={ICSStyles.labelText}>User id : </Text>
            <Text style={ICSStyles.profileInfo}>{this.state.userObj.userId}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch',}}>
            <Text style={ICSStyles.labelText}>First name : </Text>
            <Text style={ICSStyles.profileInfo}>{this.state.userObj.firstName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch',}}>
            <Text style={ICSStyles.labelText}>Last name : </Text>
            <Text style={ICSStyles.profileInfo}>{this.state.userObj.lastName}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch',}}>
            <Text style={ICSStyles.labelText}>Address : </Text>
            <Text style={ICSStyles.profileInfo}>{this.state.userObj.userAddress}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly',}}>
            <Text style={ICSStyles.labelText}>Contact number : </Text>
            <Text style={ICSStyles.profileInfo}>{this.state.userObj.contactNumber}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={ICSStyles.leftButton}>
                <Text>     Modify     </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ICSStyles.leftButton}>
                <Text>     Save     </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ICSPage>
    );
  }
}