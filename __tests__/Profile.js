import 'react-native';
import React from 'react';
import Profile from '../components/pages/Profile';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <Profile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
