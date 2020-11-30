import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, TextInput ,View, ImagePropTypes} from 'react-native';
const Button = (props) => {
    const [text, setText] = useState('');
    return (
        <View>
             <TextInput
                 value={text}
                onChangeText = {value => setText(value)}
                style = {styles.inputStyle}
                placeholder='Please enter your todo item'
            />
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress= {() => { 
                props.sendText(text);
                setText('');
            }}
        >
            <Text style={styles.buttonText}>ADD TODO</Text>

        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#FF5BFF',
        padding: 20,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    inputStyle : {
        padding: 10,
        margin: 5,
        width: Dimensions.get('window').width* 0.8,
        backgroundColor: 'white',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10
    }
})
export { Button }