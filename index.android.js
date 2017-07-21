/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from './header'
import Inputs from './input'
import List from './listView'

export default class MyStack extends Component {
    render() {
        return (
            <View>
            < Header myState={'MyStack'}/ >
            < Inputs / >
            < List / >
            </View>
    )
        ;
    }
}

AppRegistry.registerComponent('MyStack', () => MyStack);