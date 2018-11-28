// React native and others libraries imports
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
  } from 'react-native';

export default class Sell extends Component {

    constructor(){
      super();
      
      this.state = {
        productName: "",
        category: "",
        quantity: "",
        price: "",
        sellerUserId: "",
        picture: ""
      }
      this.handleproductName = this.handleproductName.bind(this);
      this.handlecategory = this.handlecategory.bind(this);
      this.handlequantity = this.handlequantity.bind(this);
      this.handleprice = this.handleprice.bind(this)
      this.postProduct = this.postProduct.bind(this);
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

    postProduct(){
        
        console.log("in post product");
        
        return fetch('http://172.27.238.145:5000/products/addproduct', {
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
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
            if(!responseJson.error)
            {
                Alert.alert(
                    'Product Posted Successfully!',
                    [
                    {text: 'Ok', onPress: () => Actions.homeScene(), style: 'default'},
                    ],
                    { cancelable: false }
                )
                //Actions.homeScene();
            }
        })
        .catch((error) =>{
        console.error(error);
        });
    }
  
    render() {
      return (
        <Container>
            <Container>
                <Label text="Product Name" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleproductName}
                />
            </Container>
            <Container>
                <Label text="Category" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handlecategory}
                />
            </Container>
            <Container>
                <Label text="Quantity" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handlequantity}
                />
            </Container>
            <Container>
                <Label text="Price in $" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleprice}
                />
            </Container>
            <Container>
                <Button 
                    label="Post Product"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                    onPress={this.postProduct.bind()} 
                />
            </Container>
        </Container>
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

const Button = (props) => {
     
    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{props.label}</Text>
    }
 
    return (
        <TouchableHighlight 
            underlayColor="#ccc"
            onPress={props.onPress} 
            style={[
                props.noDefaultStyles ? '' : styles.button, 
                props.styles ? props.styles.button : '']}
        >
            { getContent() }
        </TouchableHighlight>
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