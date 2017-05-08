import 'react-native';
import 'react-native';
import React from 'react';
import SpaceQuiz from '../components/pages/quizzes/SpaceQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <SpaceQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});