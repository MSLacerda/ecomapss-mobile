import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import ResouceService from '../services/resource.service';

export default class Sub extends Component {

  constructor() {
    super();
    this.state = {
      trees: []
    }
  }

  componentDidMount() {
    this.props.navigator.setOnNavigatorEvent(evento => {
      if (evento.id === 'willAppear')
        this.load();
    });
  }

  load() {
    let uri = "/trees";
    ResouceService.get(uri)
      .then(json => this.setState({ trees: json.Data, status: 'NORMAL' }))
      .catch(e => this.setState({ status: 'FALHA_CARREGAMENTO' }));
  }

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({ item }) => (<Text>{item.nome_cie} </Text>);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          tela 2
        </Text>

        <FlatList
          data={this.state.trees}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
