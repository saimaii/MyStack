import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {

    state = {
        textIn: ''
    }


handleText = (text) => {
    this.setState({ textIn: text })
}


pop = (textIn) => {
    alert(': ' + textIn )
}

render(){
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "text"
                placeholderTextColor = "#26a69a"
                autoCapitalize = "none"
                onChangeText = {this.handleText}/>

        <View style={styles.containerButton}>
            <TouchableOpacity
                    style = {styles.button}
    onPress = { () => this.textIn}>
                <Text style = {styles.buttonText}>

                    Push
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style = {styles.button2}
                                onPress = { () => this.pop('Delete')}>
                                <Text style = {styles.buttonText}>
                                    Pop
                                </Text>
         </TouchableOpacity>
                        </View>
                         </View>





)
}
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,


    },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#26a69a',
        borderWidth: 1
    },


    button: {

        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        flex:1
    },


    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 5
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 5



    },button2: {

        backgroundColor: '#e57373',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        flex:1
    }

})

