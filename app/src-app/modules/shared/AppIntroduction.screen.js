import React, { Component } from 'react'
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
  Thumbnail,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import { Navigation } from 'react-native-navigation';
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

  _goToPanel() {
    ;
  }
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}	>

        {/* Step flora */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#41CC99', '#61E54A', '#5CCE07']}
            style={styles.linearGradient}>
            <Thumbnail square large source={require('../../../asserts/ecomapss/flora.png')} />
            <Text style={styles.text}>Flora</Text>
          </LinearGradient>
        </View>


        {/* Step fosseis */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#FFCA65', '#FF9E51', '#FF743F']}
            style={styles.linearGradient}>
            <Thumbnail square large source={require('../../../asserts/ecomapss/fossil.png')} />
            <Text style={styles.text}>Fósseis</Text>
          </LinearGradient>
        </View>


        {/* Step fauna */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 2 }}
            locations={[0, 0.5, 10]}
            colors={['#32C9FF', '#187AFF', '#0137FF']}
            style={styles.linearGradient}>
            <Thumbnail square large source={require('../../../asserts/ecomapss/fauna.png')} />
            <Text style={styles.text}>Fauna</Text>
          </LinearGradient>
        </View>


        {/* Step  historia*/}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.5, 10]}
            colors={['#CF6C84', '#CB657F', '#990033']}
            style={styles.linearGradient}>
            <Thumbnail square large source={require('../../../asserts/ecomapss/windmill.png')} />
            <Text style={styles.text}>História</Text>
          </LinearGradient>
        </View>

        {/* Step Login */}
        <View style={styles.linearGradient}>
          <LinearGradient
            start={{ x: 0.0, y: 0.45 }}
            end={{ x: 0.7, y: 0.7 }}
            locations={[0, 0.5, 10]}
            colors={['#41CC99', '#41CC99', '#05CCF7']}
            style={styles.full}>
            <View>
              <View style={styles.centerSelf}>
                <Thumbnail style={styles.centerSelf} large source={require('../../../asserts/images/ecomapss.png')} />
                <Text style={styles.text}>Ecomapss</Text>
              </View>
              <Form style={styles.form}>
                <Item floatingLabel full large >
                  <Label style={styles.label}>Nome:</Label>
                  <Input />
                </Item>
                <Button
                  block
                  light
                  bordered
                  style={styles.button}
                  onPress={() => {
                    this.props.navigator.resetTo({
                      screen: 'MyCards',
                      title: 'Inicio',
                      passProps: {
                        name: "nameaa"
                      }, // simple serializable object that will pass as props to the pushed screen (optional)
                      animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
                      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
                      navigatorStyle: {
                        tabBarHidden: false,
                      }, // override the navigator style for the pushed screen (optional)                      
                      leftButtons: [
                        {
                          id: 'sideMenu'
                        }
                      ]
                    })
                  }}>
                  <Text style={styles.label}>Entrar</Text>
                </Button>
              </Form>
            </View>
          </LinearGradient>
        </View>
      </Swiper>
    );
  }
}