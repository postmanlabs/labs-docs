import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import Theme from '../../../styles/theme';

jest.mock('aether-marketing', () => ({
  FooterLinkStyles: ({ children }) => <div className="FooterLinkStyles">{children}</div>,
  SectionStyles: ({ children }) => <div className="SectionStyles">{children}</div>,
}));

// Helper function to find an element by type and props
const findElement = (tree, type, props) => {
  if (!tree) return null;
  if (tree.type === type && Object.keys(props).every(key => tree.props[key] === props[key])) {
    return tree;
  }
  if (tree.children) {
    for (const child of tree.children) {
      const result = findElement(child, type, props);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Theme><Footer /></Theme>)
      .toJSON();
    // console.log(JSON.stringify(tree, null, 2)); // Log the entire tree structure with 2 spaces indentation
    expect(tree).toMatchSnapshot();
  });

  it('contains FooterImage with correct src', () => {
    const tree = renderer
      .create(<Theme><Footer /></Theme>)
      .toJSON();

    // console.log(JSON.stringify(tree, null, 2)); // Log the entire tree structure with 2 spaces indentation

    // Find the div element that contains the img element with the correct alt attribute
    const footerImg = findElement(tree, 'div', {});
    const image = footerImg ? findElement(footerImg, 'img', { alt: 'Postman Logo stacked' }) : null;

    // if (!footerImg) {
    //   console.error('FooterImg component not found');
    // } else {
    //   console.log('FooterImg component found:', JSON.stringify(footerImg, null, 2));
    // }
    expect(footerImg).toBeDefined();

    // if (!image) {
    //   console.error('Image element not found within FooterImg');
    // } else {
    //   console.log('Image element found:', JSON.stringify(image, null, 2));
    // }
    expect(image).toBeDefined();
    if (image) {
      expect(image.props.src).toBe('https://voyager.postman.com/logo/postman-logo-orange-stacked.svg');
    }
  });
});