import 'react-native';
import React from 'react';
import Settings from '../components/Settings';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <Settings />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
