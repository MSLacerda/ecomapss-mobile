import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Thumbnail } from 'native-base';
import BackgroundImage from '../shared/background.component'
import * as usersActions from '../../core/actions/users.actions'
import { HttpProvider } from '../../resource/HttpProvider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props) {

    super(props);
    this.state = { username: "", password: "" }
    this.http = new HttpProvider();
  }

  componentWillMount() {
    this.props.navigator.setStyle({
      navBarHidden: true,
      navBarBackgroundColor: '#000000',
    });
  }

  getUser() {
    this.props.actions.loginUser(this.state.username, this.state.password)
  }

  render() {
    const { auth } = this.props;
    return (
      <BackgroundImage source={require('../../../asserts/images/back.jpg')}>
        <Content>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../../asserts/images/ecomapss.png')} />
              <Text style={[styles.welcome, styles.textShadow]}>
                EcoMapss {auth}
              </Text>
            </View>
            <Form >
              <Item rounded last style={styles.itemSpace}>
                <Label style={[styles.text, styles.textShadow]}>E-mail: </Label>
                <Input
                  keyboardType="email-address"
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                  style={[styles.text, styles.textShadow]}
                />
              </Item>
              <Item rounded last style={styles.itemSpace}>
                <Label style={[styles.text, styles.textShadow]}>Senha: </Label>
                <Input
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                  style={[styles.text, styles.textShadow]}
                />
              </Item>
              <Button rounded success block
                style={styles.itemSpace}
                onPress={this.getUser.bind(this)}>
                <Text style={styles.text}>Entrar{this.username}</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </BackgroundImage>
    )
  }
}



function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);




const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
    marginTop: 50
  },
  itemSpace: {
    marginTop: 30,
  },
  text: {
    color: "white",
  },
  logoContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    flex: 1
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    color: "white",
    margin: 25,
    // marginBottom:30
  },
  textShadow: {
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  }
});