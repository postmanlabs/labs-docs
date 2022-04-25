import React from 'react';
import renderer from 'react-test-renderer';
import CookieAlert from './CookieAlert';

// LeftNav uses useStaticQuery which requires the data to be mocked in /__mocks__/gatsby.js

describe('Cookie Notification', () => {
  it('displays on initial load', () => {
    const tree = renderer
      .create(<CookieAlert />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
