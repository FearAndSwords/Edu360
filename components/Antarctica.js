import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, WebView, Linking} from 'react-native';
import Header from './Header';

class Antarctica extends Component
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
                <Header headerText = {'Antarctica'}/>

                <WebView
                    source={{html: "<html><body><iframe width='350' height='250' src='https://www.youtube.com/embed/GBJDiFJZf-A' frameborder='0'></iframe></body></html>"}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    style={styles.video}
                />

                <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/embed/GBJDiFJZf-A')}>
                    <Text style={styles.textStyle}> Open 360 View </Text>
                </TouchableHighlight>

                <View style={styles.containerStyle}>
                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('antarcticaQuizPage')}>
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
            },
        video:
            {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 360,
                height: 250,
                margin: 55
            }
    });

export default Antarctica;
