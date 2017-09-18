/**
 * Created by caiqu on 22/08/2017.
 */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';


const Spinner = ({size}) => {
    return (
        <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )

}

const styles = {
    SpinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export {Spinner}
