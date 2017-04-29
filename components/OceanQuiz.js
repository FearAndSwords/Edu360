import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';

var questionNumber = 1;
var oceanQuizScore = 0;

class OceanQuiz extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                questionText: 'Around 50% of the Earth\'s surface is covered by oceans',
                nextBtnTxt: 'Next Question'
            }
    }

    updateTrue = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'WRONG: Around 70% of the Earth\'s surface is covered by oceans'});
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'CORRECT!'});
            oceanQuizScore++;
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'CORRECT!'});
            oceanQuizScore++;
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'WRONG: There are 5 oceans covering the surface of our globe (Pacific, Atlantic, Indian, Arctic & Southern)'})
        }
    }

    updateFalse = () =>
    {
        if(questionNumber == 1)
        {
            this.setState({questionText: 'CORRECT!'});
            oceanQuizScore++;
            //return{background: #9adb8c #db8c8c
        }
        if(questionNumber == 2)
        {
            this.setState({questionText: 'WRONG: The largest ocean on Earth is the Pacific Ocean'})
        }
        if(questionNumber == 3)
        {
            this.setState({questionText: 'WRONG: We have only explored about 5% of the Earth\'s oceans'})
        }
        if(questionNumber == 4)
        {
            this.setState({questionText: 'CORRECT!'});
            oceanQuizScore++;
        }
    }

    updateQuestion = () =>
    {
        questionNumber++;
        if(questionNumber == 2) {this.setState({questionText: 'The largest ocean on Earth is the Pacific Ocean'})}
        if(questionNumber == 3) {this.setState({questionText: 'We have only explored about 5% of the Earth\'s oceans'})}
        if(questionNumber == 4) {this.setState({questionText: 'There are 4 oceans covering the surface of our globe'})}
        if(questionNumber == 5)
        {
            this.setState({questionText: 'Your Score: '+(oceanQuizScore/4*100)+"%", nextBtnTxt: 'Retry?'});
        }
        if(questionNumber > 5)
        {
            questionNumber = 1;
            oceanQuizScore = 0;
            this.setState({questionText: 'Around 50% of the Earth\'s surface is covered by oceans', nextBtnTxt: 'Next Question'});
        }
    }

    resetVariables = () =>
    {
        questionNumber = 1;
        oceanQuizScore = 0;
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

export default OceanQuiz;
