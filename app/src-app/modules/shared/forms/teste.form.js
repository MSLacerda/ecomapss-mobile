import { Text, Content, View } from 'native-base';
import React, { Component } from 'react'
import EmInput from '../../../components/emInput.component'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: {
        name:""
      }
    }
  }

  render() {
    return (
      <View>
        <EmInput id="nome" type="text" name="nome" value={this.state.nome} onChange={this.salvaAlteracao.bind(this,'nome')} label="Nome" />
      </View>
    )
  }
}


