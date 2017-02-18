import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles.ios.js';
import Nav from './Navbar.ios.js';
import SearchBar from './Searchbar.ios.js';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as app from '../actions/appActions.ios.js';
import getApp from '../reducers/appReducers.ios.js'

class App extends Component {
  constructor(props) {
    super(props);
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 5,
    }
  }

  render() {
    console.log('props', this.props.actions.default)
    const {state, actions} = this.props;
    if (state.showSearchBar) {
      return (
        <View style={[styles.container, this.border('yellow')]}>
          <View style={[styles.navigation, this.border('pink')]} >
            <Nav />
          </View>
          <View style={[styles.app, this.border('black')]} >
            <Text style={styles.welcome}>
              Welcome to Snack Time!
            </Text>
          </View>
          <View style={[styles.searchBarPictureFrame, this.border('red')]} >
            <SearchBar />
          </View>
          <View style={[styles.buttonView]}>
            <Image style={[styles.takePicture, this.border('green')]} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, this.border('yellow')]}>
          <View style={[styles.navigation, this.border('pink')]} >
            <Nav />
          </View>
          <View style={[styles.app, this.border('black')]} >
            <Text style={styles.welcome}>
              Welcome to Snack Time!
            </Text>
          </View>
          <TouchableHighlight style={[styles.searchBarPictureFrame, this.border('red')]} onPress={actions.default} >
            <Image style={styles.searchBarPicture} source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/449337-200.png'}} />
          </TouchableHighlight>
          <View style={[styles.buttonView]}>
            <Image style={[styles.takePicture, this.border('green')]} source={{uri: 'https://s3.amazonaws.com/features.ifttt.com/newsletter_images/2015_February/camera512x512+(1).png'}}/>
          </View>
        </View>
      );
    }
  }
}

export default connect(state => ({
    state: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(app, dispatch)
  })
)(App);