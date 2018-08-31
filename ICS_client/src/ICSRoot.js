import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginPage from './ICSLogin.js';
import HomePage from './ICSHome.js';

export default class ICSRoot extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="ICS_root">
	        <Scene key="loginScene"
	          component={LoginPage}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="homeScene"
	          component={HomePage}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}