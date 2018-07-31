import React, { Component } from 'react'
import { Item, Input, Icon, View, Label } from 'native-base';

export default class EmInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isInvalid: true
    }
  }

  componentWillMount(){
    this._min()
  }

  _min = () => {
    if (this.props.min && this.value.length < this.props.min) {
      this.setState({ isInvalid: true })
    }
  }

  render() {
    const { isInvalid } = this.state
    return (
      <Item  error={isInvalid}>
        <Label>Username</Label>
        <Input {...this.props}/>
        {/* <Icon name='close-circle' /> */}
      </Item>
    )
  }
}