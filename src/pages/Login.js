import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';

import firebase from 'firebase';
import Spinner from '../components/Spinner';
import Splash from '../components/Splash';

class Login extends Component
{
    constructor()
    {
        super();
        this.state = { email: '', password: '', error: '', loading: false, loggedIn: false };
        this.navigate = this.navigate.bind(this)
    }    

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAZHP7PREhyxPkHqGUaM3cVp97qNZWXL9c',
            authDomain: 'authentication-9e6e9.firebaseapp.com',
            databaseURL: 'https://authentication-9e6e9.firebaseio.com',
            storageBucket: 'authentication-9e6e9.appspot.com',
            messagingSenderId: '166330697411'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }            
        });
    }    

    moveToNextScreen() {
        this.navigate('homePage');
    }

    onButtonPress() {
        //console.log("working");
        const { email, password } = this.state;

        this.setState({ error: '', loading: true});
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((this.onLoginFail.bind(this)))
            })
    }

    onLoginFail() {
        this.setState({ 
            loading: false,
            error: 'Authentication Failed'
        })
    }

    onLoginSuccess() {
        console.log("move screenb  :( ");
        this.moveToNextScreen();
        // this.setState({ 
        //     email: '',
        //     password: '',
        //     loading: false,
        //     error: ''
        // });
        //console.log("move screenb  :( ");
        
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner  />;
        }

        return (
            <Text 
            style={styles.buttonText}
            onPress={() => this.onButtonPress()}
            //onPress={() => this.navigate('homePage')}
            >
            LOGIN
            </Text>
            );
        }

    navigate(name)
    {
        //console.print("nav worked");
        this.props.navigator.push(
        {
            name
        });
    }

    render()
    {
        return (
            <Splash>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                        style={styles.logo}
                        source={require('../components/edu360Logo.png')}
                        resizeMode="cover"
                        />

                        {/*<Text style={styles.title}>An Educational App with 360 Videos</Text>*/}
                    </View>
                    <View style={styles.formContainer}>
                        <KeyboardAvoidingView behaviour="padding" style={styles.container2}>
                            <TextInput
                                onChangeText={email => this.setState({ email })}
                                value={ this.state.email }
                                label='Email'
                                placeholder="username or email"
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                returnKeyType="next"
                                style={styles.input}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                autoCorrect={false}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType="email-address"
                                autoCapitalize='none'
                            />

                            <TextInput
                                //ref='2'
                                placeholder="password"
                                value={ this.state.password }
                                onChangeText={ password => this.setState({ password})}
                                label='password'
                                placeholderTextColor="rgba(255,255,255,0.5)"
                                returnKeyType="go"
                                secureTextEntry
                                style={styles.input}
                                ref={(input) => this.passwordInput = input}
                            />
                        </KeyboardAvoidingView>

                        <Text style={styles.errorTextStyle}>
                            {this.state.error}
                        </Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            {this.renderButton()}
                        </TouchableOpacity>
                    </View>
                </View>
            </Splash>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#008100'
    },
    logoContainer:
    {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:
    {
        alignSelf: 'center',
        height: 150,
        width: 320,
        borderWidth: 1,
        borderRadius: 15
    },
    title:
    {
        color: 'white',
        marginTop: 10,
        width: 320,
        textAlign: 'center',
        opacity: 0.9
    },
    buttonContainer:
    {
        backgroundColor: '#006b00',
        paddingVertical: 15
    },
    container2:
    {
        padding: 20
    },
    input:
    {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 10        
    },
    buttonText:
    {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        padding: 20
    }
});

export default Login;