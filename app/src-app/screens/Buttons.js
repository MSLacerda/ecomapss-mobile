import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Buttons extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Button block light>
            <Text>Light</Text>
          </Button>
          <Button block>
            <Text>Primary</Text>
          </Button>
          <Button large block rounded success iconLeft>
            <Icon name='home' size={20} />
            <Text>Success</Text>
          </Button>

          <Button rounded info>
            <Text>Info </Text>
          </Button>

          <Button iconRight transparent warning>
            <Icon name='beer' />
            <Text>Next</Text>
          </Button>
          <Button block warning>
            <Text>Warning</Text>
          </Button>
          <Button bordered danger>
            <Text>Danger</Text>
          </Button>
          <Button dark>
            <Text>Dark</Text>
          </Button>
          <Button disabled>
            <Text>Disabled</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

