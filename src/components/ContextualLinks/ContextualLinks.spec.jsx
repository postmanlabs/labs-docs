import React from 'react';
import renderer from 'react-test-renderer';
import ContextualLinks from './ContextualLinks';
import Theme from '../../../styles/theme.jsx';


describe('ContextualLinks', () => {
  it('renders correctly', () => {
    const testLinks = [
      {
        type: 'section',
        name: 'Prerequisites',
      },
      {
        type: 'link',
        name: 'Download and Install',
        url: 'https://www.postman.com/downloads/',
      },
      {
        type: 'subtitle',
        name: 'Blog Posts',

      },
      {
        type: 'link',
        name: 'home',
        url: '/',
      },
    ];

    const tree = renderer
      .create(<Theme ><ContextualLinks links={testLinks} /></Theme>)
      .toJSON();
    expect(tree.children[0].props.className).toBe('contextual-links__section');
    expect(tree.children[1].props.className).toBe('contextual-links__link');
    expect(tree).toMatchSnapshot();
  });
});
