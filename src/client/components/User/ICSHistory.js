<<<<<<< HEAD
import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSHistory extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.128:5000/users1/allRegistered')
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
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={ICSStyles.flatview}>
            <Text style={ICSStyles.profileInfo}>{item.firstName}{item.lastName}</Text>
          </View>
          }
          keyExtractor={(item, index) => item.userId}
        />
      </View>
      </ICSPage>
    );
  }
}
=======
import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSHistory extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.229.1:5000/posts/getById', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'test1',
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
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={ICSStyles.flatview}>
            <Text style={ICSStyles.profileInfo}>{item.name}{"   "}{item.category}{"   "}{item.quantity}{"   "}{item.price}</Text>
          </View>
          }
          keyExtractor={(item, index) => item.userId}
        />
      </View>
      </ICSPage>
    );
  }
}
>>>>>>> dd342f2bb7ef7a76dab60dfc361fec5266a532b2
