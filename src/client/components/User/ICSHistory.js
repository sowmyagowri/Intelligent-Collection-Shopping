import React from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, Text, View ,StyleSheet, YellowBox } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSHistory extends React.Component {

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

  componentWillReceiveProps()
  {
      return fetch('http://10.0.2.2:5000/products/getByBuyerId', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyerUserId: this.userId,
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
    //  debugger;

    this.getKey().then(() =>{
         //   debugger;

      fetch('http://10.0.2.2:5000/products/getByBuyerId', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyerUserId: this.userId,
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

  getImage(prodName)
  {

    if(prodName.toUpperCase() == 'MOP'){
      return 'https://www.randomlists.com/img/things/mop.jpg';}
    if(prodName.toUpperCase() == 'WATER BOTTLE' || prodName.toUpperCase() == 'WATER' ||  prodName.toUpperCase() == 'BOTTLE'){
      return 'https://www.randomlists.com/img/things/water_bottle.jpg';}
    if(prodName.toUpperCase() == 'FORK' || prodName.toUpperCase() == 'SPOON'){          
      return 'https://www.randomlists.com/img/things/plastic_fork.jpg';}
    if(prodName.toUpperCase() == 'TRAY'){
      return 'https://www.randomlists.com/img/things/ice_cube_tray.jpg';}
    if(prodName.toUpperCase() == 'MILK'){
      return 'https://www.randomlists.com/img/things/milk.jpg';}
    if(prodName.toUpperCase() == 'SHAMPOO' || prodName.toUpperCase() == 'CREAM' || prodName.toUpperCase() == 'CONDITIONER'){
      return 'https://www.randomlists.com/img/things/shampoo.jpg';}
    if(prodName.toUpperCase() == 'KNIFE' || prodName.toUpperCase() == 'CUTTER'){
      return 'https://www.randomlists.com/img/things/knife.jpg';}
    if(prodName.toUpperCase() == 'SCOTCH TAPE'){
      return 'https://www.randomlists.com/img/things/scotch_tape.jpg';}

    return 'http://delishus.fi/wp-content/themes/delishus10/img/veg.png';
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
          <Text style={ICSStyles.titleText}> Posts History </Text>
          <Text></Text>
          <Text></Text>
          <List>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) =>(
                  <ListItem 
                      roundAvatar
                      title={item.productName }
                      subtitle={
                          <View style={ICSStyles.listSubtitle}>
                            <Text>{item.category}</Text>
                            <Text>{item.quantity}</Text>
                            <Text>{item.price}</Text>
                          </View>
                        }
                      avatar={{uri:this.getImage(item.productName)}}

                      />
                )
              
              }
              keyExtractor={(item, index) => item.userId}
            />
          </List>
      </View>
      </ICSPage>
    );
  }
}