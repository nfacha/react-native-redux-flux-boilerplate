import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.inputStyle}
                value={props.value}
                onChangeText={props.onChangeText}
                autoCorrect={false}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 40,
        width: 100,
        // borderWidth: 1
    },
    labelStyle: {
        fontSize: 18,
        padingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input}