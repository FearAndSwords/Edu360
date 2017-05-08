import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

// Initialise question number and score
var questionNumber = 1;
var dinoQuizScore = 0;

class AntarcticaQuiz extends Component
{
    constructor()
    {
        super();
        // Set the initial state of the question and the text on the next button
        this.state =
            {
                questionText: 'Antarctica is considered a desert',
                nextBtnTxt: 'Next Question'
            }
    }

    // True answer function
    updateTrue = () =>
    {
        if(questionNumber == 1) // If we are on the first question
        {
            this.setState({questionText: 'CORRECT!'}); // The answer is correct
            dinoQuizScore++; // Increase the score
        }
        if(questionNumber == 2) // If we are on the second question
        {
            this.setState({questionText: 'WRONG: Polar Bears live in the Arctic (the North Pole) so they never see Penguins'}) // The answer is wrong
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'WRONG: 1000s of people live and work at various research facilities in Antarctica'})
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'CORRECT!'});
            dinoQuizScore++;
        }
    }

    // False answer function
    updateFalse = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'WRONG: Because it experiences such little rain, Antarctica is considered a desert'})
            //return{background: #9adb8c #db8c8c
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'CORRECT!'});
            dinoQuizScore++;
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'CORRECT!'});
            dinoQuizScore++;
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'WRONG: Antarctica is bigger than Europe'})
        }
    }

    // Update the question function
    updateQuestion = () =>
    {
        questionNumber++; // Go to next question
        if(questionNumber == 2) {this.setState({questionText: 'Polar Bears and Penguins live together in Antarctica'})} // Set the question text
        if(questionNumber == 3) {this.setState({questionText: 'No humans live in Antarctica'})}
        if(questionNumber == 4) {this.setState({questionText: 'Antarctica is bigger than Europe'})}
        if(questionNumber == 5) // If you have answered all questions
        {
            this.setState({questionText: 'Your Score: '+(dinoQuizScore/4*100)+"%", nextBtnTxt: 'Retry?'}); // Calculate and display score,
        }                                                                                                  // and change next button text
        if(questionNumber > 5) // If you press "Retry?"
        {
            // Reset question number and score, set question text and text on next button
            questionNumber = 1;
            dinoQuizScore = 0;
            this.setState({questionText: 'Antarctica is considered a desert.', nextBtnTxt: 'Next Question'});
        }
    }

    // Back function -> resets question number and score then navigate back
    resetVariables = () =>
    {
        questionNumber = 1;
        dinoQuizScore = 0;
        this.props.navigator.pop();
    }

    // Display for page
    render()
    {
        return (
            <View style={styles.container}>
                <Image style={{width: 360}} source={require('../../true_false.png')}/>

                <View style={styles.question}>
                    <Text style={styles.questionText}> {this.state.questionText} </Text>
                </View>

                <View style={styles.optionsStyle}>
                    <TouchableHighlight style={styles.optButton} onPress = {this.updateTrue}>
                        <Image style={styles.image} source={require('../../true.png')}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.optButton} onPress = {this.updateFalse}>
                        <Image style={styles.image} source={require('../../false.png')}/>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.nextButton} onPress = {this.updateQuestion}>
                    <Text style={styles.textStyle}> {this.state.nextBtnTxt} </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={this.resetVariables}>
                    <Image style={styles.image} source={require('../../back.png')}/>
                </TouchableHighlight>
            </View>
        );
    }
}

// Styling for page
const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#1abc9c',
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
        optButton:
            {
                alignItems: 'center',
                height: 70,
                width: 170,
                marginLeft: 5,
                marginRight: 5,
                paddingTop: 10,
                paddingBottom: 10,
                position: 'relative',
                marginTop: 10
            },
        nextButton:
            {
                backgroundColor: '#00ff00',
                borderColor: '#107561',
                borderWidth: 3,
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
                textAlign: 'center',
                fontWeight: 'bold',
            },
        questionText:
            {
                fontSize: 30,
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
            },
        image:
            {
                borderColor: '#107561',
                borderWidth: 3,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 1,
                backgroundColor: '#000000',
            }
    });

export default AntarcticaQuiz;
