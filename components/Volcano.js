import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableHighlight, WebView, Linking, Image} from 'react-native';

class Volcano extends Component
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
                <Image style={styles.image} source={require('./volcano_btn.png')}/>

                <WebView
                    source={{html: "<html><body><iframe width='350' height='250' src='https://www.youtube.com/embed/_X6caE4v0fk' frameborder='0'></iframe></body></html>"}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.video}
                />

                <TouchableHighlight style={styles.button} onPress={() => Linking.openURL('https://www.youtube.com/embed/_X6caE4v0fk')}>
                    <Text style={styles.textStyle}> Open 360 View </Text>
                </TouchableHighlight>

                <View style={styles.containerStyle}>
                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('volcanoQuizPage')}>
                        <Text style={styles.textStyle}> Take Quiz </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.pop()}}>
                        <Text style={styles.textStyle}> Home </Text>
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
                backgroundColor: '#e74c3c',
            },
        button:
            {
                backgroundColor: '#c0392b',
                borderColor: '#962a1f',
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
                backgroundColor: '#e74c3c',
                margin: 10,
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 5},
                shadowOpacity: 0.5,
                elevation: 3,
                marginTop: 15
            },
        image:
            {
                borderColor: '#962a1f',
                borderWidth: 3,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 1,
                width: 360,
                backgroundColor: '#000000',
            }
    });

export default Volcano;
