/**
 * Created by caiqu on 14/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#F8FFF8',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,

    }
};

export {Header};
