// React native and others libraries imports
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

export default class ICSSell extends Component {

    constructor(){
      super();
      
      this.state = {
        isLoading: true,
        userIdString: '',
        productName: "",
        category: "",
        quantity: "",
        price: "",
        sellerUserId: "",
        zip:"",
        picture: ""
      }
      this.handleproductName = this.handleproductName.bind(this);
      this.handlecategory = this.handlecategory.bind(this);
      this.handlequantity = this.handlequantity.bind(this);
      this.handleprice = this.handleprice.bind(this);
      this.handlezip = this.handlezip.bind(this);
      this.postProduct = this.postProduct.bind(this);
      this.zipCode = "123",
      this.uId = "test1"
    }
  
    handleproductName = (text) => {
        this.setState({ productName: text })
    }

    handlecategory = (text) => {
        this.setState({ category: text })
    }

    handlequantity = (text) => {
        this.setState({ quantity: text })
    }

    handleprice = (text) => {
        this.setState({ price: text })
    }

    handlezip = (text) => {
        this.setState({ zip: text })
    }

    async getKey() {
        try {

            const valueU = await AsyncStorage.getItem('userObj');
            const users = JSON.parse(valueU);
            console.log("the user id from storage", users['user1'].userId);
          //  this.setState({userIdString: users['user1'].userId});
            this.uId = users['user1'].userId;
            this.zipCode = users['user1'].userAddress;
    
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
      }

      componentDidMount(){
        this.getKey().then(() =>{
		this.getZip().then(() =>{
		            this.setState({isLoading: false});
        });

        });
      }

  async getZip() {
    try {
      const valueU = await AsyncStorage.getItem('currentZip');
      this.zipCode = valueU;
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }
    postProduct(){
        
        console.log("in post product");
    
        return fetch('http://10.0.2.2:5000/products/registerProduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productName: this.state.productName,
                category: this.state.category,
                quantity: this.state.quantity,
                price: this.state.price,
                zipcode: this.zipCode,
                sellerUserId: this.uId
            }),
        }).then((response) => response.json())
            .then( (responseJson) => {
  
                if(!responseJson.error)
                {
                    Alert.alert(
                      'Posted',
                      'Your product request has been posted',
                      [
                        {text: 'OK', onPress: () => console.log('Posted ok pressed'), style: 'cancel'},
                      ],
                      { cancelable: false }
                    )
                    Actions.homeScene();
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
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.titleText}>Intelligent Collection Shopping </Text>
          <Text></Text>
          <Text></Text>
          <Text style={ICSStyles.subtitleText}>Make a post </Text>
          
          <Text></Text><Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="Product Name"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleproductName}
          />
          <Text></Text>
          <TextInput
            style={ICSStyles.input}
            placeholder="Product Category"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handlecategory}
          />
          <Text></Text>
     <TextInput
            style={ICSStyles.input}
            placeholder="Item quantity"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handlequantity}
          />
          <Text></Text>
      <TextInput
            style={ICSStyles.input}
            placeholder="Price"
            secureTextEntry={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={this.handleprice}
          />
          <Text></Text>
          <Text></Text>
          <Button
            style={ICSStyles.registerButton}
            onPress={this.postProduct.bind()} 
            title="Post"
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