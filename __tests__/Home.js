import 'react-native';
import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import Home from '../components/Home'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe ('rendering', () =>
{
    it('renders correctly', () => {
        const tree = renderer.create(
            <Home/>
        );
        it('should render a <View/>', () => {
            const branch = renderer.create(
                <View/>
            );
        });
        //     .toJSON();
        // expect(tree).toMatchSnapshot();
    });

    it('should render a <TouchableHighlight/>');
});

