import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';

class Profile extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Profile Page'}/>

                <Image
                    style={{borderWidth: 3, borderColor: '#f099f0', width: 150, height: 150}}
                    source={require('./purpleDino.jpg')}
                />

                <Text style={styles.textStyle}> Level 1 </Text>

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
                backgroundColor: '#F5FCFF',
            },
        button:
            {
                backgroundColor: 'grey',
                borderColor: '#1f5130',
                borderWidth: 1,
                alignItems: 'center',
                height: 55,
                paddingTop: 10,
                paddingBottom: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                elevation: 2,
                position: 'relative',
                marginLeft: 5,
                marginRight: 5,
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

export default Profile;
