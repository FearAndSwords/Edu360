//imports the various libraries for using components, rendering views, text and stylesheets

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

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
                            <Image
                                style={styles.logo}
                                source={require('./edu360Logo.png')}
                                resizeMode="cover"
                            />
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
        backgroundColor: "#008100",
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
    },
    logo:
    {
        alignSelf: 'center',
        height: 150,
        width: 320,
        borderWidth: 1,
        borderRadius: 15
    }
});

export default Splash;