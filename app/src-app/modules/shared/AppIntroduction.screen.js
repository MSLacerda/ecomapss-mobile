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
import LinearGradient from 'react-native-linear-gradient';


export default class AppIntroduction extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.navigator.setStyle({
      navBarHidden: true,
    })
  }

  componentDidMount() {
  }
  _onDone = () => {
    // User finished the introduction. Show "real" app
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}	>

        {/* Step I */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.45 }}
            end={{ x: 0.7, y: 0.7 }}
            locations={[0, 0.5, 10]}
            colors={['#41CC99', '#41CC99', '#05CCF7']}
            style={styles.linearGradient}>
            <Thumbnail large source={require('../../../asserts/images/ecomapss.png')} />
            <Text style={styles.text}>Ecomapss</Text>
          </LinearGradient>
        </View>
        {/* Step II */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#FFCA65', '#FF9E51', '#FF743F']}
            style={styles.linearGradient}>
            <Thumbnail large source={require('../../../asserts/ecomapss/flora.svg')} />
            <Text style={styles.text}>Fósseis</Text>
          </LinearGradient>
        </View>

        {/* Step III */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#41CC99', '#61E54A', '#5CCE07']}
            style={styles.linearGradient}>
            <Thumbnail large source={require('../../../asserts/ecomapss/flora.svg')} />
            <Text style={styles.text}>Flora</Text>
          </LinearGradient>
        </View>

        {/* Step IV */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#32C9FF', '#187AFF', '#0137FF']}
            style={styles.linearGradient}>
            <Thumbnail large source={require('../../../asserts/ecomapss/flora.svg')} />
            <Text style={styles.text}>Flora</Text>
          </LinearGradient>
        </View>

        {/* Step V */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.5, 10]}
            colors={['#CF6C84', '#CB657F', '#990033']}
            style={styles.linearGradient}>
            <Thumbnail large source={require('../../../asserts/ecomapss/flora.svg')} />
            <Text style={styles.text}>Flora</Text>
          </LinearGradient>
        </View>
      </Swiper>
    );
  }
}