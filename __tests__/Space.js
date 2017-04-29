import 'react-native';
import 'jest';
import React from 'react';
import Space from '../components/Space'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.unmock('WebView');

it('renders correctly', () => {

    const tree = renderer.create(
        <Space/>
    );
});
