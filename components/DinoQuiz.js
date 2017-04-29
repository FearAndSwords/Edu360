import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';

var questionNumber = 1;
var dinoQuizScore = 0;

class DinoQuiz extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                questionText: 'Dinosaurs ruled the earth for over 160 million years',
                nextBtnTxt: 'Next Question',
                bgColor: '#db8c8c'
            }
    }

    updateTrue = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'CORRECT!'});
            dinoQuizScore++;
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'WRONG: Modern-day birds descend from a type of dinosaurs known as theropods'})
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'WRONG: Dinosaurs lived on Earth until around 65 million years ago when a mass extinction occurred'})
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'CORRECT!'})
            dinoQuizScore++;
        }
    }

    updateFalse = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'WRONG: Dinosaurs ruled the earth for over 160 million years'})
            //return{background: #9adb8c #db8c8c
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'CORRECT!'})
            dinoQuizScore++;
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'CORRECT!'})
            dinoQuizScore++;
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'WRONG: There are currently over 330 described dinosaur species and this number is growing'})
        }
    }

    updateQuestion = () =>
    {
        questionNumber++;
        if(questionNumber == 2) {this.setState({questionText: 'Modern-day wolves descend from a type of dinosaurs known as theropods'})}
        if(questionNumber == 3) {this.setState({questionText: 'Dinosaurs lived on Earth until around 1 million years ago when a mass extinction occurred'})}
        if(questionNumber == 4) {this.setState({questionText: 'There are currently over 330 described dinosaur species and this number is growing'})}
        if(questionNumber == 5)
        {
            this.setState({questionText: 'Your Score: '+(dinoQuizScore/4*100)+"%", nextBtnTxt: 'Retry?'});
        }
        if(questionNumber > 5)
        {
            questionNumber = 1;
            dinoQuizScore = 0;
            this.setState({questionText: 'Dinosaurs ruled the earth for over 160 million years', nextBtnTxt: 'Next Question'});
        }
    }

    resetVariables = () =>
    {
        questionNumber = 1;
        dinoQuizScore = 0;
        this.props.navigator.pop();
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Header headerText = {'True or False?'}/>

                <View style={styles.question}>
                    <Text style={styles.questionText}> {this.state.questionText} </Text>
                </View>

                <View style={styles.optionsStyle}>
                    <TouchableHighlight style={styles.optButton} onPress = {this.updateTrue}>
                        <Text style={styles.textStyle}> True </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.optButton} onPress = {this.updateFalse}>
                        <Text style={styles.textStyle}> False </Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.button} onPress = {this.updateQuestion}>
                    <Text style={styles.textStyle}> {this.state.nextBtnTxt} </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={this.resetVariables}>
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
                backgroundColor: '#2ecc71',
            },
        button:
            {
                backgroundColor: '#27ae60',
                borderColor: '#1f5130',
                borderWidth: 1,
                alignItems: 'center',
                height: 50,
                width: 350,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                elevation: 2,
                marginBottom: 5,
                paddingTop: 10,
                paddingBottom: 10,
                position: 'relative',
                marginTop: 10
            },
        optButton:
            {
                backgroundColor: '#27ae60',
                borderColor: '#1f5130',
                borderWidth: 1,
                alignItems: 'center',
                height: 50,
                width: 170,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                elevation: 2,
                marginLeft: 5,
                marginRight: 5,
                paddingTop: 10,
                paddingBottom: 10,
                position: 'relative',
                marginTop: 10
            },
        textStyle:
            {
                fontSize: 25,
                color: 'black',
                textAlign: 'center',

            },
        questionText:
            {
                fontSize: 25,
                color: '#000000',
                textAlign: 'center',
                fontFamily: 'monospace',
                fontWeight: 'bold'
            },
        optionsStyle:
            {
                padding: 5,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                position: 'relative'
            },
        question:
            {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#95a5a6',
                width: 350,
                padding: 10,
                margin: 10,
                marginTop: 25,
                borderWidth: 1,
                borderColor: '#6b7677',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                elevation: 2,
            }
    });

export default DinoQuiz;
