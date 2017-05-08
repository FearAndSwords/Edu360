import 'react-native';
import React from 'react';
import DinoQuiz from '../components/DinoQuiz';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(
        <DinoQuiz />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
