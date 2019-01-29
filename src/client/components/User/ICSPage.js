import React, {Component} from 'react';

import {StyleSheet, Image, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import bgSrc from '../images/background.jpg';
import ICSStyles from './ICSStyles';

export default class ICSPage extends Component {
  render() {
    return (
      <ImageBackground style={ICSStyles.backgroundImg} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}