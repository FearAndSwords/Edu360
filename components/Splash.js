//imports the various libraries for using components, rendering views, text and stylesheets

import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';

//export out Splash screen and render the XSL to to the screen
// Splash component adapted from https://www.youtube.com/watch?v=Euh4ax9XR9c&feature=youtu.be&t=4383
class Splash extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {done: false}
    }

    timer()
    {
        setTimeout(()=>{
            this.setState({
                done: true
            });
        }, 1000);
    }

    componentDidMount()
    {
        this.timer();
    }

    render()
    {
        return (
            this.state.done ?
                ({...this.props.children})
                :
                (
                    <View style={styles.wrapper}>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title} onPress={() => this.navigate('loginPage')}>Edu 360</Text>
                        </View>
                        <View>
                            <Text style={styles.subtitle}>Powered by AwesomeTeam</Text>
                        </View>
                    </View>
                )
        );
    }
}
//create a styles object and use it to style the splash screen

const styles = StyleSheet.create(
{
    wrapper:
    {
        backgroundColor: "#673AB7", 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title:
    {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: .5, height: .5},
        textShadowRadius: 1
    },
    subtitle:
    {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper:
    {
        justifyContent: 'center',
        flex: 1
    }
});

export default Splash;