import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
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
                <Image style={styles.header} source={require('../options.png')}/>

                <TouchableHighlight style={styles.button} onPress={() => this.navigate('profilePage')}>
                    <Image style={styles.image} source={require('../profile.png')} resizeMode="stretch"/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={() => this.navigate('settingsPage')}>
                    <Image style={styles.image} source={require('../setting.png')} resizeMode="stretch"/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button}
                                    onPress={() => this.logOut()}>
                    <Image style={styles.image} source={require('../log_out.png')} resizeMode="stretch"/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.backButton} onPress={() => this.props.navigator.pop()}>
                    <Image style={styles.backButtonImage} source={require('../back.png')}/>
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
        backgroundColor: '#000000',
        alignItems: 'center',
        height: 90,
        width: 350,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 2,
        marginTop: 30
    },
    backButton:
        {
            alignItems: 'center',
            height: 50,
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
    },
    image:
        {
            borderColor: '#1a2530',
            height: 90,
            width: 350,
            borderWidth: 3,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
            backgroundColor: '#000000',
        },
    header:
        {
            width: 360,
            height: 60,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
        },
    backButtonImage:
        {
            borderColor: '#1a2530',
            borderWidth: 3,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
            width: 350,
            backgroundColor: '#000000',
        }
});

export default Options;
