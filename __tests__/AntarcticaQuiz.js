import 'react-native';
import React from 'react';
import AntarcticaQuiz from '../components/pages/quizzes/AntarcticaQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <AntarcticaQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
