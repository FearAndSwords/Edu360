'use strict';

jest.disableAutomock();

const React = require('React');
const ReactTestRenderer = require('react-test-renderer');
const Text = require('Text');
const TouchableHighlight = require('TouchableHighlight');

describe('TouchableHighlight', () => {
    it('renders correctly', () => {
        const instance = ReactTestRenderer.create(
            <TouchableHighlight style={{}}>
                <Text>Touchable</Text>
            </TouchableHighlight>
        );

        expect(instance.toJSON()).toMatchSnapshot();
    });
});


// import 'react-native';
// import React from 'react';
// import {View, TouchableHighlight} from 'react-native';
// import Home from '../components/Home'
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// describe ('rendering', () =>
// {
//     it('renders correctly', () => {
//         const tree = renderer.create(
//             <Home/>
//         );
//         it('should render a <View/>', () => {
//             const branch = renderer.create(
//                 <View/>
//             );
//         });
//         //     .toJSON();
//         // expect(tree).toMatchSnapshot();
//     });
//
//     it('should render a <TouchableHighlight/>');
// });

