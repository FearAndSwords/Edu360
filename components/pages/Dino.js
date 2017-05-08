import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, WebView, Image, Linking } from 'react-native';

class Dino extends Component
{
    constructor (props)
    {
        super(props);
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

render()
    {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../dinosaur_btn.png')}/>

                 <WebView
                    source={{html: "<html><body><iframe width='350' height='250' src='https://www.youtube.com/embed/ERh7PwCxJQY' frameborder='0' allowfullscreen></iframe></body></html>"}}
                    // javaScriptEnabled={true}
                    // domStorageEnabled={true}
                    // startInLoadingState={true}
                    // userAgent={"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36"}
                    style={styles.video}
                />

                <TouchableHighlight style={styles.button} onPress={() => Linking.openURL('https://www.youtube.com/embed/ERh7PwCxJQY')}>
                    <Image style={styles.image} source={require('../open360.png')}/>
                </TouchableHighlight>

                <View style={styles.containerStyle}>
                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('dinoQuizPage')}>
                        <Image style={styles.image} source={require('../take_quiz.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.pop()}}>
                        <Image style={styles.image} source={require('../back.png')}/>
                    </TouchableHighlight>
                </View>
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
                backgroundColor: '#2ecc71',
            },
        button:
            {
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
        textStyle:
            {
                fontSize: 25,
                color: 'black',
            },
        optionsStyle:
            {
                padding: 5,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                position: 'relative'
            },
        video:
            {
                width: 365,
                backgroundColor: '#2ecc71',
                margin: 10,
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 5},
                shadowOpacity: 0.5,
                elevation: 3,
                marginTop: 15
             },
        image:
            {
                borderColor: '#1c8247',
                width: 350,
                borderWidth: 3,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 1,
                backgroundColor: '#000000',
            }
    });

export default Dino;