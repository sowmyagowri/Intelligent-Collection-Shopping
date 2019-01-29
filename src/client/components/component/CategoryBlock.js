/**
* This is the category component used in the home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import { View  } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';

export default class CategoryBlock extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <TouchableOpacity
          onPress={this._onPress.bind(this)}
          activeOpacity={0.9} 
        >
          <View style={styles.height}>
            <View style={styles.overlay} />
            <View style={styles.border} />
            <View style={styles.text}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.subtitle}>Shop Now</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _onPress() {
    if(this.props.id == 2)
    {
        Actions.sellScene();
    }
    else if(this.props.id == 1)
    {
        Actions.productList();
    }
    else
    {
      Actions.category({id: this.props.id, title: this.props.title});
    }
  }
}

const styles = {
  text: {
    width: Dimensions.get('window').width,
    height: 300,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 32
  },
  subtitle: {
    textAlign: 'center',
    color: '#0080FF',
    fontSize: 16,
    fontWeight: '100',
    fontStyle: 'italic'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  border: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  height: {
    height: 300,
    width: null,
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)'

  }
};
