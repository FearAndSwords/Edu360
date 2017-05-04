import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Header from './Header';
import firebase from 'firebase';

class Options extends Component
{
    constructor()
    {
        super();
        this.navigate = this.navigate.bind(this)
    }

    navigate(name)
    {
        this.props.navigator.push(
            {
                name
            });
    }

    logOut = () =>
    {
        firebase.auth().signOut();
        this.props.navigator.push({ name: 'loginPage'});
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Options'}/>

                <TouchableHighlight style={styles.button} onPress={() => this.navigate('profilePage')}>
                    <Text style={styles.textStyle}>Profile</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={() => this.navigate('settingsPage')}>
                    <Text style={styles.textStyle}> Settings </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button}
                                    onPress={() => this.logOut()}>
                    <Text style={styles.textStyle}> Log Out </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
                    <Text style={styles.textStyle}> Home </Text>
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
        backgroundColor: '#34495e'
    },
    button:
    {
        backgroundColor: '#2c3e50',
        borderColor: '#1a2530',
        borderWidth: 1,
        alignItems: 'center',
        height: 90,
        width: 350,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 2,
        marginTop: 30
    },
    textStyle:
    {
        fontSize: 25,
        color: 'black'
    }
});

export default Options;
