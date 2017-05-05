import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './components/Home';
import Dino from './components/Dino';
import Space from './components/Space'
import Options from './components/Options';
import Login from './components/Login';
import Ocean from './components/Ocean'
import Profile from './components/Profile'
import Settings from './components/Settings';
import DinoQuiz from "./components/DinoQuiz";
import SpaceQuiz from "./components/SpaceQuiz";
import OceanQuiz from "./components/OceanQuiz";
import HumanBody from "./components/HumanBody";
import Volcano from "./components/Volcano";
import Antarctica from "./components/Antarctica";
import HumanBodyQuiz from "./components/HumanBodyQuiz";
import VolcanoQuiz from "./components/VolcanoQuiz";
import AntarcticaQuiz from "./components/AntarcticaQuiz";

export default class Edu360 extends Component
{
    constructor()
    {
        super();
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator)
    {
        if (route.name === 'loginPage') {
            return <Login navigator={navigator}/>
        }
        if (route.name === 'homePage') {
            return <Home navigator={navigator}/>
        }
        else if (route.name === 'dinoPage') {
            return <Dino navigator={navigator}/>
        }
        else if (route.name === 'spacePage') {
            return <Space navigator={navigator}/>
        }
        else if (route.name === 'oceanPage') {
            return <Ocean navigator={navigator}/>
        }
        else if (route.name === 'bodyPage') {
            return <HumanBody navigator={navigator}/>
        }
        else if (route.name === 'volcanoPage') {
            return <Volcano navigator={navigator}/>
        }
        else if (route.name === 'antarcticaPage') {
            return <Antarctica navigator={navigator}/>
        }
        else if (route.name === 'optionsPage') {
            return <Options navigator={navigator}/>
        }
        else if (route.name === 'profilePage') {
            return <Profile navigator={navigator}/>
        }
        else if (route.name === 'settingsPage') {
            return <Settings navigator={navigator}/>
        }
        else if (route.name === 'dinoQuizPage') {
            return <DinoQuiz navigator={navigator}/>
        }
        else if (route.name === 'spaceQuizPage') {
            return <SpaceQuiz navigator={navigator}/>
        }
        else if (route.name === 'oceanQuizPage') {
            return <OceanQuiz navigator={navigator}/>
        }
        else if (route.name === 'bodyQuizPage') {
            return <HumanBodyQuiz navigator={navigator}/>
        }
        else if (route.name === 'volcanoQuizPage') {
            return <VolcanoQuiz navigator={navigator}/>
        }
        else if (route.name === 'antarcticaQuizPage') {
            return <AntarcticaQuiz navigator={navigator}/>
        }
    }
    render()
    {
        return (
            <Navigator initialRoute={{name: 'homePage'}} // Need to check for login -> if logged in go to homePage instead
                       renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('Edu360', () => Edu360);
