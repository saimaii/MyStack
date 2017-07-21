import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View>
        <Text style = {styles.myState}>
    {props.myState}
</Text>
    </View>
)
}

export default Header

const styles = StyleSheet.create ({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: '#26a69a',
        fontWeight: 'bold',
        fontSize: 20
    }
})