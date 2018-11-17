import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Text, View ,StyleSheet } from 'react-native';

import LoginPage from './ICSLogin.js';
import HomePage from './ICSHome.js';
import RegisterPage from './ICSRegister.js';
import ProfilePage from './ICSProfile.js';
import HistoryPage from './ICSHistory.js';
import PostsPage from './ICSPosts.js';
import MapPage from './ICSMap.js';

const TabIcon = ({ selected, title }) => {
  	return (
    	<Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  	);
  }

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
	        <Scene key="MapScene"
              component={MapPage}
              animation='fade'
              hideNavBar={true}
            />
			<Scene key="registerScene"
	          component={RegisterPage}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="tabbar"
          	  tabs={true}
          	  hideNavBar={true}
              tabBarStyle={{ backgroundColor: '#FFFFFF' }} >
	            {/* Tab and it's scenes */}
	            <Scene key="userProf" title="Profile" icon={TabIcon}>
		            <Scene
		              key="profileScene"
		              component={ProfilePage}
		              title="User Profile"
		              hideNavBar={true}
		              initial={true}
		            />
	            </Scene>
	            <Scene key="userHistory" title="History" icon={TabIcon}>
		            <Scene
		              key="historyScene"
		              component={HistoryPage}
		              title="User History"
		              hideNavBar={true}
		            />
            	</Scene>
            	<Scene key="userPosts" title="Posts" icon={TabIcon}>
		            <Scene
		              key="postsScene"
		              component={PostsPage}
		              title="User Posts"
		              hideNavBar={true}
		            />
            	</Scene>
	        </Scene>
	      </Scene>
	    </Router>
	  );
	}
}
