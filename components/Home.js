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
        backgroundColor: '#e67e22'
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
        backgroundColor: '#a34000',
        borderColor: '#d35400',
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
    image:
    {
        borderColor: '#a34000',
        borderWidth: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
    }
});

export default Home;
