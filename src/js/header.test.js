import React from 'react';
import { render } from '@testing-library/react';
import Header from './js/Header';

test('renders learn react link', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
