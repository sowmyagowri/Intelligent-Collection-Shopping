import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

componentDidMount(){
    return fetch('http://192.168.1.128:5000/users1/authenticate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'test1',
          userPassword: 'test1',
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: JSON.stringify(responseJson),
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
        
      });
  }
  componentDidMount1(){
   //return fetch('http://192.168.1.128:5000/api/hello')
    return fetch('http://192.168.1.128:5000/users1/allRegistered')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource:  JSON.stringify(responseJson),
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <Text numberOfLines={5}>
          {this.state.dataSource}
        </Text>
      </View>
    );
  }

  render1(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.userId}, {item.firstName}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});