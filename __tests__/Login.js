import 'react-native';
import React from 'react';
import Login from '../components/pages/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <Login />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
