import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, WebView, Image, Linking} from 'react-native';
import Vr from 'react-native-vr';
import Header from './Header';
import AppLink from 'react-native-app-link';

class Dino extends Component
{
    constructor (props)
    {
        super(props);
        // this.state = {
        //     paused: false,
        //     displayMode: Vr.constants.DISPLAY_MODE.EMBEDDED
        // };

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
                <Image source={require('./dinosaur_btn.png')}/>

                 {/*<Vr*/}
                 {/*src=*/}
                 {/*{{*/}
                 {/*uri: 'https://drive.google.com/open?id=0B74a-1GCKQS9X1l1SzNPSk41eXM',*/}
                 {/*type: Vr.constants.TYPE.MONO,*/}
                 {/*format: Vr.constants.FORMAT.DEFAULT*/}
                 {/*}}*/}
                 {/*paused={this.state.paused}*/}
                 {/*displayMode={this.state.displayMode}*/}
                 {/*style=*/}
                 {/*{{*/}
                 {/*height: 250,*/}
                 {/*width: 300*/}
                 {/*}} />*/}

                 {/*<WebView*/}
                 {/*source={{html: "<html><body><iframe width='300' height='250' src='https://www.youtube.com/embed/RJa4kG1N3d0' frameborder='0' allowfullscreen></iframe></body></html>"}}*/}
                 {/*/>*/}

                 {/*<iframe width="300" height="250" src="http://www.youtube.com/embed/bIPcobKMB94"/>*/}

                 {/*<iframe src="//storage.googleapis.com/vrview/2.0/embed?video=https://www.youtube.com/watch?v=ehkWm-dl8r4.mp4&is_stereo=true">*/}
                 {/*</iframe>*/}

                 {/*<WebView*/}
                 {/*source={{html: "<html><body><iframe src='//storage.googleapis.com/vrview/index.html?image=image.png&is_stereo=true'></iframe></body></html>"}}*/}
                 {/*/>*/}
                
                {/*This one!*/}
                 <WebView
                    source={{html: "<html><body><iframe width='350' height='250' src='https://www.youtube.com/embed/ERh7PwCxJQY' frameborder='0'></iframe></body></html>"}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    //startInLoadingState={true}
                    //userAgent={"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.110 Safari/537.36"}
                    style={styles.video}
                />

                {/*<YouTube*/}
                    {/*ref="youtubePlayer"*/}
                    {/*videoId="_X6caE4v0fk" // The YouTube video ID*/}
                    {/*play={true}           // control playback of video with true/false*/}
                    {/*hidden={false}        // control visiblity of the entire view*/}
                    {/*playsInline={true}    // control whether the video should play inline*/}
                    {/*loop={false}          // control whether the video should loop when ended*/}

                    {/*onReady={(e)=>{this.setState({isReady: true})}}*/}
                    {/*onChangeState={(e)=>{this.setState({status: e.state})}}*/}
                    {/*onChangeQuality={(e)=>{this.setState({quality: e.quality})}}*/}
                    {/*onError={(e)=>{this.setState({error: e.error})}}*/}
                    {/*onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}*/}

                    {/*style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}*/}
                {/*/>*/}


                <TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/embed/ERh7PwCxJQY')
                    // AppLink.maybeOpenURL('https://www.youtube.com/embed/ehkWm-dl8r4', { appName:'YouTube', appStoreId:'id544007664', playStoreId:'com.google.android.youtube'}).then(() => {
                    //
                    // })
                }>
                    <Text style={styles.textStyle}> Open 360 View </Text>
                </TouchableHighlight>

                {/*<View style={styles.optionsStyle}>*/}
                    {/*<TouchableHighlight style={styles.button} onPress={() => this.setState({ paused: !this.state.paused })}>*/}
                        {/*<Text style={styles.textStyle}>    Pause    </Text>*/}
                    {/*</TouchableHighlight>*/}

                    {/*<TouchableHighlight style={styles.button} onPress={() => this.setState({ displayMode: Vr.constants.DISPLAY_MODE.FULLSCREEN_MONO })}>*/}
                        {/*<Text style={styles.textStyle}> Fullscreen </Text>*/}
                    {/*</TouchableHighlight>*/}
                {/*</View>*/}

                <View style={styles.containerStyle}>
                    <TouchableHighlight style={styles.button} onPress={() => this.navigate('dinoQuizPage')}>
                        <Text style={styles.textStyle}> Take Quiz </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.pop()}}>
                        {/*<TouchableHighlight style={styles.button} onPress={() => {this.props.navigator.pop(); this.setState({ paused: !this.state.paused })}}>*/}
                        <Text style={styles.textStyle}> Home </Text>
                    </TouchableHighlight>
                </View>
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
                color: 'black'
            },
        optionsStyle:
            {
                padding: 5,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                position: 'relative'
            },
        video:
            {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: 360,
                height: 250,
                margin: 55
             }
    });

export default Dino;
