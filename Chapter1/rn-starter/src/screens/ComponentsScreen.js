import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    var name = 'Tristan';
    
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.OtherStyle}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    OtherStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;