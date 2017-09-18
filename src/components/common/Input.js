/**
 * Created by caiqu on 20/08/2017.
 */
import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
                value={value}/>
        </View>
    )
};


const styles = {
    inputStyle:{color: '#000',
                paddingRight: 5,
                paddingLeft: 5,
                fontSize: 18,
                lineHeight: 23,
                flex: 3},
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export {Input}