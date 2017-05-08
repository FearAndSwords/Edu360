import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

var questionNumber = 1;
var spaceQuizScore = 0;

class SpaceQuiz extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                questionText: 'Over one million Earths could fit inside the Sun',
                nextBtnTxt: 'Next Question'
            }
    }

    updateTrue = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'CORRECT!'});
            spaceQuizScore++;
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'WRONG: Jupiter is the biggest planet in our solar system'})
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'WRONG: The universe is approximately 13.8 billion years old'})
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'CORRECT!'})
            spaceQuizScore++;
        }
    }

    updateFalse = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'WRONG: Over one million Earths could fit inside the Sun'})
            //return{background: #9adb8c #db8c8c
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'CORRECT!'})
            spaceQuizScore++;
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'CORRECT!'})
            spaceQuizScore++;
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'WRONG: The first person to set foot on the Moon was Neil Armstrong'})
        }
    }

    updateQuestion = () =>
    {
        questionNumber++;
        if(questionNumber == 2) {this.setState({questionText: 'Mars is the biggest planet in our solar system'})}
        if(questionNumber == 3) {this.setState({questionText: 'The universe is approximately 1 billion years old'})}
        if(questionNumber == 4) {this.setState({questionText: 'The first person to set foot on the Moon was Neil Armstrong'})}
        if(questionNumber == 5)
        {
            this.setState({questionText: 'Your Score: '+(spaceQuizScore/4*100)+"%", nextBtnTxt: 'Retry?'});
        }
        if(questionNumber > 5)
        {
            questionNumber = 1;
            spaceQuizScore = 0;
            this.setState({questionText: 'Over one million Earths could fit inside the Sun', nextBtnTxt: 'Next Question'});
        }
    }

    resetVariables = () =>
    {
        questionNumber = 1;
        spaceQuizScore = 0;
        this.props.navigator.pop();
    }

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

const styles = StyleSheet.create(
    {
        container:
            {
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#9b59b6',
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
        nextButton:
            {
                backgroundColor: '#00ff00',
                borderColor: '#6c3384',
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
        textStyle:
            {
                fontSize: 30,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
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
            },
        image:
            {
                borderColor: '#6c3384',
                borderWidth: 3,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 1,
                backgroundColor: '#000000',
            }
    });

export default SpaceQuiz;
