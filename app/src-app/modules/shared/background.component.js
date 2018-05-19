
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
import { Container } from 'native-base';

export default class BackgroundImage extends Component {

  render() {
    const { children, style, imageStyle, ...props } = this.props;
    return (
      <Container style={[styles.container, style]} >
        <Image {...props} style={[StyleSheet.absoluteFill, styles.image, imageStyle,]} />
        {children}
      </Container>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height,
  }
})