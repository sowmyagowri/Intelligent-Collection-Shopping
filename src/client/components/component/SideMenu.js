/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { AsyncStorage, ScrollView, LayoutAnimation, UIManager, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Icon, Item, Input, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import SideMenuSecondLevel from './SideMenuSecondLevel';
import Text from './Text';
import ICSStyles from '../src/ICSStyles';

export default class SideMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
        clickedItem: '',
        firstName:'user'
      };
      this.firstName = "User";
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

   componentDidMount(){
    this.getKey().then(() =>{
        this.setState({
          isLoading: false
        }, function(){
        });
      })
  }

  async getKey() {
    try {
      const valueU = await AsyncStorage.getItem('userObj');
      const users = JSON.parse(valueU);
      this.firstName = users['user1'].firstName;
      this.setState({firstName: users['user1'].firstName});

    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  render() {
    
    return(
      
          <ScrollView style={styles.container}>
              {this.renderMenu()}
          </ScrollView>
    );
  }

  renderMenu() {

      return(
        <View>
        <View style={ICSStyles.flatview}>
            <Text > Hello </Text>
            <Text >{this.state.firstName}</Text>
          </View>
          <View style={styles.line} />
          <View >
            <List>
              {this.renderSecondaryList()}
            </List>
          </View>
          <View style={styles.line} />

        </View>
      );
    

  }

  renderSecondaryList() {
    let secondaryItems = [];
    menusSecondaryItems.map((item, i) => {
      secondaryItems.push(
        <ListItem
          last
          icon
          key={item.id}
          button={true}
          onPress={Actions[item.key]}
        >
          <Left>
            <Icon style={{fontSize: 18}} name={item.icon} />
          </Left>
          <Body style={{marginLeft: -5}}>
            <Text style={{fontSize: 16}}>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return secondaryItems;
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  }
};

const menusSecondaryItems = [
  {
    id: 190,
    title: 'Profile',
    key: 'profileScene'
  },
  {
    id: 519,
    title: 'Buy History',
    key: 'historyScene'
  },
  {
    id: 19,
    title: 'Sell Posts',
    key: 'postsScene'
  },
  {
    id: 521,
    key: 'searchScene',
    title: 'Find nearby',
  },
  {
    id: 522,
    key: 'communitiesScene',
    title: 'My communities',
  },
  {
    id: 523,
    key: 'addComuScene',
    title: 'Add a community',
  },
  {
    id: 20,
    key: 'logoutScene',
    title: 'Logout',
  }
];
