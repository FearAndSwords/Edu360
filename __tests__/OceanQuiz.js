import 'react-native';
import React from 'react';
import OceanQuiz from '../components/pages/quizzes/OceanQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <OceanQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
