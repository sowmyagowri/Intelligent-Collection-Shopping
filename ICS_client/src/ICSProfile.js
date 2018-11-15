import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { KeyboardAvoidingView, FlatList, ActivityIndicator, Text, View ,StyleSheet, Button } from 'react-native';

import ICSPage from './ICSPage';
import ICSStyles from './ICSStyles';

export default class ICSProfile extends React.Component {
  render() {
    return (
      <ICSPage>
      <KeyboardAvoidingView behavior="padding" style={ICSStyles.loginInputContainer}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={ICSStyles.profileInfo}>{'user id '}</Text>
          <Text style={ICSStyles.profileInfo}>{'User Name'}</Text>
          <Text style={ICSStyles.profileInfo}>{'User Address'}</Text>
          <Text style={ICSStyles.profileInfo}>{'Contact number'}</Text>
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
    );
  }
}