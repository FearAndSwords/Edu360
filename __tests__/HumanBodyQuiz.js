import 'react-native';
import React from 'react';
import HumanBodyQuiz from '../components/HumanBodyQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <HumanBodyQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
