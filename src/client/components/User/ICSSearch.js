import React from 'react';
import { AsyncStorage, FlatList, ActivityIndicator, Text,
  Button,
  TouchableOpacity,
  TextInput, View ,StyleSheet, YellowBox } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Header, Icon, Item, Input } from 'native-base';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';
import Colors from '../Colors';

export default class ICSSearch extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    userString:"defaultUser",
    searchStr:"milk",
      userObj: null,},
      this.userId = "test2",

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: isMounted(...) is deprecated',
      'Warning: isMounted is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: Each child in an array or iterator should have a unique "key" prop.',
    ]);
    this.zip = '94306';
    this.handleSearch = this.handleSearch.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
  }

  handleSearch = (text) => {
      this.setState({ searchStr: text })
  }

  searchProduct(){
    this.setState({
          isLoading: true,
          
        }, function(){

        });

    fetch('http://10.0.2.2:5000/products/findByProductNameandZip', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: this.state.searchStr,
          userAddress: this.zip,
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

  async getZip() {
    try {
      const valueU = await AsyncStorage.getItem('currentZip');
      this.zip = valueU;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentDidMount(){
    //  debugger;

    this.getZip().then(() =>
      this.setState({
          isLoading: false,
          
        }, function(){

        }),
      );
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
      <Header
          searchBar
          rounded
          style={{backgroundColor: Colors.navbarBackgroundColor}}
          backgroundColor={Colors.navbarBackgroundColor}
          androidStatusBarColor={Colors.statusBarColor}
          noShadow={true}
        >
            <Item>
              <Input
                placeholder="Search..."
                value={this.state.searchText}
                onChangeText={(text) => this.setState({searchStr: text})}
                onSubmitEditing={() => this.searchProduct()}
                style={{marginTop: 9}}
              />
              <Icon name="ios-search" onPress={() => this.searchProduct()} />
            </Item>
          </Header>
      
      <View style={{flex: 1, paddingTop:20}}>
      <Text></Text>


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