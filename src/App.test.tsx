import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loader', () => {
  render(<App />);
  const headerElement = screen.getByText('SpaceX App');
  expect(headerElement).toBeInTheDocument();
});
