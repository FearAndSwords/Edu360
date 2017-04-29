import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';

var questionNumber = 1;
var dinoQuizScore = 0;

class AntarcticaQuiz extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                questionText: 'Antarctica is considered a desert',
                nextBtnTxt: 'Next Question'
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
            this.setState({questionText: 'WRONG: Polar Bears live in the Arctic (the North Pole) so they never see Penguins'})
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'WRONG: 1000s of people live and work at various research facilities in Antarctica'})
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
            this.setState({questionText: 'WRONG: Because it experiences such little rain, Antarctica is considered a desert'})
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
            this.setState({questionText: 'WRONG: Antarctica is bigger than Europe'})
        }
    }

    updateQuestion = () =>
    {
        questionNumber++;
        if(questionNumber == 2) {this.setState({questionText: 'Polar Bears and Penguins live together in Antarctica'})}
        if(questionNumber == 3) {this.setState({questionText: 'No humans live in Antarctica'})}
        if(questionNumber == 4) {this.setState({questionText: 'Antarctica is bigger than Europe'})}
        if(questionNumber == 5)
        {
            this.setState({questionText: 'Your Score: '+(dinoQuizScore/4*100)+"%", nextBtnTxt: 'Retry?'});
        }
        if(questionNumber > 5)
        {
            questionNumber = 1;
            dinoQuizScore = 0;
            this.setState({questionText: 'Antarctica is considered a desert.', nextBtnTxt: 'Next Question'});
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
                    <Text style={styles.textStyle}> {this.state.questionText} </Text>
                </View>

                <View style={styles.optionsStyle}>
                    <TouchableHighlight style={styles.button} onPress = {this.updateTrue}>
                        <Text style={styles.textStyle}> True </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress = {this.updateFalse}>
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
                color: 'black',
                textAlign: 'center',

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
                backgroundColor: '#8cc1db',
                width: 360,
                padding: 10,
                margin: 10
            },
        hidden:
            {
                opacity: 0
            }
    });

export default AntarcticaQuiz;

