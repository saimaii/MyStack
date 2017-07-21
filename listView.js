import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {

    state = {
        textIn: ''
    }

    handleText = (text) => {
    this.setState({ textIn: text })
}


alertItemName = (item) => {
    alert(item.textIn)
}

render() {
    return (
        <View>
        {this.state.textIn.map((item, index) => (
        <TouchableOpacity
            key = {item.id}
            style = {styles.container}
            onPress = {() => this.alertItemName(item)}>
            <Text style={styles.text}>
                {item.textIn}
            </Text>
        </TouchableOpacity>
    ))
        }
            </View>
    )}}


export default List

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#ffe082',
        alignItems: 'center',
    },
    text: {
        color: 'black'
    }
})