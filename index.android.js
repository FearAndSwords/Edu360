import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './components/pages/Home';
import Dino from './components/pages/Dino';
import Space from './components/pages/Space'
import Options from './components/pages/Options';
import Login from './components/pages/Login';
import Ocean from './components/pages/Ocean'
import Profile from './components/pages/Profile'
import Settings from './components/pages/Settings';
import DinoQuiz from "./components/pages/quizzes/DinoQuiz";
import SpaceQuiz from "./components/pages/quizzes/SpaceQuiz";
import OceanQuiz from "./components/pages/quizzes/OceanQuiz";
import HumanBody from "./components/pages/HumanBody";
import Volcano from "./components/pages/Volcano";
import Antarctica from "./components/pages/Antarctica";
import HumanBodyQuiz from "./components/pages/quizzes/HumanBodyQuiz";
import VolcanoQuiz from "./components/pages/quizzes/VolcanoQuiz";
import AntarcticaQuiz from "./components/pages/quizzes/AntarcticaQuiz";

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
        else if (route.name === 'homePage') {
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
            <Navigator initialRoute={{name: 'loginPage'}} // Start on Login page
                       renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('Edu360', () => Edu360);
