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
          <Text style={ICSStyles.profileInfo}>{'harshadab'}</Text>
          <Text style={ICSStyles.profileInfo}>{'Harshada Bhide-Apte'}</Text>
          <Text style={ICSStyles.profileInfo}>{'Sheridan Ave, Palo Alto 94306'}</Text>
          <Text style={ICSStyles.profileInfo}>{'1234567890'}</Text>
        </View>
      </KeyboardAvoidingView>
      </ICSPage>
    );
  }
}