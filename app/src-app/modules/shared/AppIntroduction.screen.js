import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Thumbnail
} from 'native-base';

import Swiper from 'react-native-swiper';
import styles from './styles/AppIntroduction';

export default class AppIntroduction extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.navigator.setStyle({
      navBarHidden: true,
    })
  }

  _onDone = () => {
    // User finished the introduction. Show "real" app
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}	>
        <View style={styles.slide1}>
          <Thumbnail large large	 source={require('../../../asserts/images/ecomapss.png')} />
          <Text style={styles.text}>ecomapss</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );  
  }
}