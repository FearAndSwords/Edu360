import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import Home from './components/Home';
import Dino from './components/Dino';
import Space from './components/Space'
import Options from './components/Options';
import Splash from './components/Splash';
import Login from './components/Login';
import Ocean from './components/Ocean'
import Profile from './components/Profile'
import Settings from './components/Settings';
import DinoQuiz from "./components/DinoQuiz";
import SpaceQuiz from "./components/SpaceQuiz";
import OceanQuiz from "./components/OceanQuiz";

export default class Edu360 extends Component
{
    constructor()
    {
        super();
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator)
    {
        if(route.name === 'splashPage')
        {
            return <Splash navigator={navigator}/>
        }
        if(route.name === 'loginPage')
        {
            return <Login navigator={navigator}/>
        }
        if(route.name === 'homePage')
        {
            return <Home navigator={navigator}/>
        }
        else if(route.name === 'dinoPage')
        {
            return <Dino navigator={navigator}/>
        }
        else if(route.name === 'spacePage')
        {
            return <Space navigator={navigator}/>
        }
        else if(route.name === 'oceanPage')
        {
            return <Ocean navigator={navigator}/>
        }
        else if(route.name === 'optionsPage')
        {
            return <Options navigator={navigator}/>
        }
        else if(route.name === 'profilePage')
        {
            return <Profile navigator={navigator}/>
        }
        else if(route.name === 'settingsPage')
        {
            return <Settings navigator={navigator}/>
        }
        else if(route.name === 'dinoQuizPage')
        {
            return <DinoQuiz navigator={navigator}/>
        }
        else if(route.name === 'spaceQuizPage')
        {
            return <SpaceQuiz navigator={navigator}/>
        }
        else if(route.name === 'oceanQuizPage')
        {
            return <OceanQuiz navigator={navigator}/>
        }
    }

    render()
    {
        return (
            <Navigator initialRoute={{name: 'splashPage'}}
                       renderScene={this.renderScene}
            />
        );
    }
}

AppRegistry.registerComponent('Edu360', () => Edu360);
