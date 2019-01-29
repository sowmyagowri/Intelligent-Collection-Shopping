import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Text, View ,StyleSheet } from 'react-native';

import LoginPage from './ICSLogin.js';
import HomePage from './ICSHome.js';
import RegisterPage from './ICSRegister.js';
import ProfilePage from './ICSProfile.js';
import HistoryPage from './ICSHistory.js';
import PostsPage from './ICSPosts.js';
import SearchPage from './ICSSearch.js';
import LogoutPage from './ICSLogout.js';
import SellPage from './Sell.js';
import Category from './Category.js';
import CommunitiesPage from './ICSCommunities.js';
import AddComuPage from './ICSAddCommunity.js';
import ComuSellPage from './ICSSell.js';
//import MapPage from './ICSMap.js';

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
			<Scene key="registerScene"
	          component={RegisterPage}
	          animation='fade'
	          hideNavBar={false}
	        />
	        <Scene key="searchScene"
	          component={SearchPage}
	          animation='fade'
	          hideNavBar={false}
	          title="Search product"
	        />
	        <Scene key="profileScene"
              component={ProfilePage}
              animation='fade'
              hideNavBar={false}
              title="User Profile"
            />
            <Scene key="historyScene"
		       component={HistoryPage}
		       animation='fade'
		       hideNavBar={false}
		       title="Buy History"
		    />
		    <Scene key="postsScene"
		       component={PostsPage}
		       animation='fade'
		       hideNavBar={false}
		       title="Sell Posts"
		    />
		    <Scene key="sellScene"
		       component={SellPage}
		       animation='fade'
		       title="Post Item"
		       hideNavBar={false}
		    />
		    <Scene
		       key="productList"
		       component={Category}
		       animation='fade'
		       title="Product List"
		       hideNavBar={false}
		    />
	        <Scene
		       key="logoutScene"
		       component={LogoutPage}
		       animation='fade'
		       title="Logout"
		       hideNavBar={false}
		    />
		    <Scene
		       key="communitiesScene"
		       component={CommunitiesPage}
		       animation='fade'
		       title="User Communities"
		       hideNavBar={false}
		    />
		    <Scene
		       key="addComuScene"
		       component={AddComuPage}
		       animation='fade'
		       title="Add community"
		       hideNavBar={false}
		    />
		  <Scene
		       key="ComuSellScene"
		       component={ComuSellPage}
		       animation='fade'
		       title="Post in community"
		       hideNavBar={false}
		    />

	      </Scene>
	    </Router>
	  );
	}
}