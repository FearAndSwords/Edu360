import 'react-native';
import React from 'react';
import VolcanoQuiz from '../components/pages/quizzes/VolcanoQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <VolcanoQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
