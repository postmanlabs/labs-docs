import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import Theme from '../../../styles/theme.jsx'

describe('Footer', () => {
it('renders correctly', () => {
  const tree = renderer
    .create(<Theme><Footer /></Theme>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});
