import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    //resizeMode: 'cover',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    paddingBottom: 30,
    color: '#ffffff',
  },
  inputWrapper: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
   // justifyContent: 'space-between',
  },
  loginInputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginButton: {
    alignItems: 'center',
    width: DEVICE_WIDTH - 40,
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  registerButton: {
    alignItems: 'center',
    width: DEVICE_WIDTH - 100,
    justifyContent: 'center',
    backgroundColor: '#F03000',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  profileInfo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#ffffff',
  },
});