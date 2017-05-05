import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image } from 'react-native';
import Header from './Header';

class Home extends Component
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

    render()
    {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/*<TouchableHighlight style={{}}>*/}
                        {/*<Text>Touchable</Text>*/}
                    {/*</TouchableHighlight>*/}

                    {/*<Text>Test</Text>*/}

                    <Image style={styles.header} source={require('./home_page.png')}/>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('dinoPage')}>
                        <Image style={styles.image} source={require('./dinosaur_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('spacePage')}>
                        <Image style={styles.image} source={require('./space_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('oceanPage')}>
                        <Image style={styles.image} source={require('./ocean_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('bodyPage')}>
                        <Image style={styles.image} source={require('./human_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('volcanoPage')}>
                        <Image style={styles.image} source={require('./volcano_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('antarcticaPage')}>
                        <Image style={styles.image} source={require('./antartica_btn.png')}/>
                    </TouchableHighlight>
                </ScrollView>

                <TouchableHighlight style={styles.optButton} onPress={() => this.navigate('optionsPage')}>
                    <Image style={styles.optButtonImg} source={require('./options.png')} resizeMode="stretch"/>
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
        // backgroundColor: '#e67e22'
        backgroundColor: '#006b00'
    },
    button:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 350,
        padding: 10,
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 5,
        alignItems: 'center',
        height: 90,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#d35400',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    optButton:
        {
            justifyContent: 'center',
            width: 360,
            backgroundColor: '#00ff00',
            borderColor: '#00ff00',
            borderWidth: 5,
            alignItems: 'center',
            height: 70,
            position: 'relative',
        },
    optButtonImg:
    {
        width: 360,
        height: 60,
        borderWidth: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        position: 'relative',
        marginTop: 10,
        marginBottom: 10
    },
    textStyle:
    {
        fontSize: 30,
        color: 'black'
    },
    image:
    {
        borderColor: '#00ff00',
        borderWidth: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
    },
    header:
        {
            width: 360,
            // borderColor: '#a34000',
            // borderWidth: 3,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
        }
});

export default Home;
