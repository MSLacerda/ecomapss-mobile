import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// 'MaterialIcons.ttf', 'FontAwesome.ttf'

export default class App extends React.Component {
  render() {

    var myIcon = (<Icon name="rocket" size={30} color="#900" />)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {myIcon} EcoMapss \o/
        </Text>

        <Button
          onPress={() => {
            this.props.navigator.push({
              screen: 'Sub',
              title: 'Sub',
            })
          }}
          title="Próxima"
          color="#841584"
        />

        <Button
          onPress={() => {
            this.props.navigator.push({
              screen: 'Buttons',
              title: 'Buttons',
            })
          }}
          title="Buttons"
        />

        <Button
          onPress={() => {
            this.props.navigator.push({
              screen: 'MyCards',
              title: 'MyCards',
            })
          }}
          title="MyCards"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
