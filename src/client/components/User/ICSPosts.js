import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSPosts extends React.Component {

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
            <Text style={ICSStyles.profileInfo}>{item.userId}{" "}{item.userAddress}</Text>
          </View>
          }
          keyExtractor={(item, index) => item.userId}
        />
      </View>
      </ICSPage>
    );
  }
}
