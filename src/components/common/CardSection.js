/**
 * Created by caiqu on 17/08/2017.
 */
import React from 'react';
import {
    View
} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};


const styles = {
    containerStyle:{
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};

export  {CardSection};