import React from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, Text, View ,StyleSheet, Image, ImageBackground, YellowBox } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Header, Icon, Item, Input } from 'native-base';
import {Actions, ActionConst} from 'react-native-router-flux';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';
import bgSrc from '../images/background.jpg';

export default class ICSCommunities extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    userString:"defaultUser",
      userObj: null,},
      this.userId = "test2",

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
     
      const users = JSON.parse(valueU);
      this.userId = users['user1'].userId;

    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentWillReceiveProps(){
    return fetch('http://10.0.2.2:5000/communities/getById', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: this.userId,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource:  responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
        
      }); 
  }
  componentDidMount(){
    this.getKey().then(() =>{
    return fetch('http://10.0.2.2:5000/communities/getById', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: this.userId,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource:  responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
        
      });
      });
  }

  displaySearch(zip){
      AsyncStorage.setItem('currentZip', zip);
      Actions.searchScene();
  }

  displayPost(zip){
      AsyncStorage.setItem('currentZip', zip);
      Actions.ComuSellScene();
  }

render(){

    if(this.state.isLoading){
      return(
        <ICSPage>
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
        </ICSPage>
      )
    }

    return(
      <ICSPage>
      <View style={{flex: 1, paddingTop:20}}>
      <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>My communities</Text>
          <Text></Text>
          <Text></Text>
          <List>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) =>
      <View style={ICSStyles.flatview}>
       <Icon name="ios-add" onPress={() => this.displayPost(item.zip)} />
        <Text style={ICSStyles.listItem}>{item.name}</Text>
         <Text style={ICSStyles.listItem}>{item.zip}</Text>
         <Icon name="search" onPress={() => this.displaySearch(item.zip)} />
         
         
      </View>
      }
              keyExtractor={(item, index) => item.userId}
            />
          </List>
      </View>
      </ICSPage>
    );
  }
}