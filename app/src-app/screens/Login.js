import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';

import {HttpProvider} from '../providers/HttpProvider';

export default class Login extends Component{

    constructor(){
        super();
        this.http = new HttpProvider();
    }

    getData(){
        this.http.del('https://jsonplaceholder.typicode.com/posts/1', {nome: 'teste', idade: 23})
            .then( response =>{
                console.log(response.data);
            })
            .catch( error =>{
               
            });
    }
    
    render(){
        return (
            <View>
                <Text>Hello</Text>
                <Button title="Click" onPress={this.getData.bind(this)}></Button>
            </View>
        )

    }
}