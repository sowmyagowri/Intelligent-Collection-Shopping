import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    AsyncStorage,
    KeyboardAvoidingView,
    Button,
    Alert,
    ActivityIndicator
  } from 'react-native';
import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSAddCommunity extends Component {

    constructor(){
      super();
      
      this.state = {
        isLoading: true,
        userIdString: '',
        name: "",
        zip:""
      }
      this.handleName = this.handleName.bind(this);
      this.handlezip = this.handlezip.bind(this);
      this.uId = "test1"
    }
  
    handleName = (text) => {
        this.setState({ name: text })
    }

    handlezip = (text) => {
        this.setState({ zip: text })
    }

    async getKey() {
        try {

            const valueU = await AsyncStorage.getItem('userObj');
            const users = JSON.parse(valueU);
            this.uId = users['user1'].userId;
    
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
      }

      componentDidMount(){
        this.getKey().then(() =>{
            this.setState({isLoading: false});
        });
      }

    addCommunity(){
        
        return fetch('http://10.0.2.2:5000/communities/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                zip: this.state.zip,
                userId: this.uId
            }),
        }).then((response) => response.json())
            .then( (responseJson) => {
  
                if(!responseJson.error)
                {
                    Alert.alert(
                      'Community Added',
                      'A new community has been added to your profile.',
                      [
                        {text: 'OK', onPress: () => Actions.homeScene(), style: 'cancel'},
                      ],
                      { cancelable: false }
                    )
                    
                }
        })
        .catch((error) =>{
            console.error(error);
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
        <View style={ICSStyles.inputWrapper}>
          
          <Text style={ICSStyles.titleText}>Add a community to your profile</Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Find products at more locations.... </Text>
          <Text></Text>
          <Text></Text><Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="Community Name"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleName}
          />
          <Text></Text>
          <Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="zip code"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handlezip}
          />
          <Text></Text>
          <Text></Text>
         <Button
            style={ICSStyles.registerButton}
            onPress={() => this.addCommunity()}
            title="Add"
          />
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
   
      
      );
    }
}

const Container = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}

const Label = (props) => {
    return (
        <Text 
            style={props.styles && props.styles.textLabel ? props.styles.textLabel : styles.textLabel}
        >
            {props.text}
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    labelContainer: {
        marginBottom: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    },
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 50,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
});