import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, Header, Content, View } from 'native-base';
import Wizard from '../../components/Wizard'
import Form from './forms/teste.form'
import EmInput from '../../components/emInput.component'

export default class Teste extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }

    this.steps = [
      {
        iconName: 'document',
        label: 'Dados',
        component: (

          <View>
            <EmInput id="nome" type="text" name="nome" value={this.state.name} onChangeText={(name) => this.setState({ name })} label="Nome" />
          </View>
        ),
        active: true
      },
      {
        iconName: 'pin',
        label: 'Coordenadas',
        component: (<Form />),
        active: false
      }
    ];
  }

  NameChange = (e) => {
    this.props.model.name = e.target.value
  }


  render() {
    return (
      <Container>
        <Content>
          <Wizard steps={this.steps}>

          </Wizard>
        </Content>
      </Container>
    );
  }
}

