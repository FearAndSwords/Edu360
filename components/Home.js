import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, ScrollView, Image} from 'react-native';
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
                    <Header headerText = {'Home Page'}/>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('dinoPage')}>
                        <Image source={require('./dinosaur_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('spacePage')}>
                        <Image source={require('./space_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('oceanPage')}>
                        <Image source={require('./ocean_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('bodyPage')}>
                        <Image source={require('./human_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('volcanoPage')}>
                        <Image source={require('./volcano_btn.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('antarcticaPage')}>
                        <Image source={require('./antartica_btn.png')}/>
                    </TouchableHighlight>
                </ScrollView>

                <TouchableHighlight style={styles.optButton} onPress={() => this.navigate('optionsPage')}>
                    <Text style={styles.textStyle}>Options</Text>
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
        backgroundColor: '#F5FCFF'
    },
    button:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 350,
        padding: 10,
        backgroundColor: 'grey',
        borderColor: '#1f5130',
        borderWidth: 1,
        alignItems: 'center',
        height: 90,
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
    optButton:
    {
        backgroundColor: '#63a579',
        borderColor: '#1f5130',
        borderWidth: 1,
        alignItems: 'center',
        height: 65,
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
        fontSize: 30,
        color: 'black'
    },
});

export default Home;
