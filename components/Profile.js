import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';

class Profile extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'Profile Page'}/>

                <Image
                    style={styles.image}
                    source={require('./purpleDino.jpg')}
                />

                <Text style={{fontSize: 35, color: '#25102d'}}> Level 1 </Text>

                <View style={{flexDirection:'row', margin: 10}}>
                    <View style={styles.container}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#25102d'}}>Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Dinosaur Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Space Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Ocean Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Human Body Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Volcanoes Quiz</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>Antarctica Quiz</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#25102d'}}>Best Scores</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>90%</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>100%</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>75%</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>60%</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>85%</Text>
                        <Text style={{fontSize: 20, color: '#25102d'}}>90%</Text>
                    </View>
                </View>

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
                backgroundColor: '#9b59b6'
            },
        button:
            {
                backgroundColor: '#8e44ad',
                borderColor: '#6c3384',
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
                marginLeft: 10
            },
        image:
            {
                borderWidth: 3,
                borderColor: '#f099f0',
                borderRadius: 100,
                width: 150,
                height: 150,
                margin: 15,
                padding: 10,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 1,
                backgroundColor: '#9b59b6'
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
