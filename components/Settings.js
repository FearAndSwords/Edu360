import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Header from './Header';

class Settings extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Settings Page'}/>

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.textStyle}> Edit Profile </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
                    <Text style={styles.textStyle}> Back </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#3498db'
            },
        button:
            {
                backgroundColor: '#2980b9',
                borderColor: '#1d5a82',
                borderWidth: 1,
                alignItems: 'center',
                height: 50,
                width: 350,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                elevation: 2,
                marginBottom: 10,
                marginRight: 10,
                marginLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                position: 'relative',
                marginTop: 10
            },
        textStyle:
            {
                fontSize: 25,
                color: 'black'
            },
        optionsStyle:
            {
                padding: 5,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                position: 'relative'
            }
    });

export default Settings;
