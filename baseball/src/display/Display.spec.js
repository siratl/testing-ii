import React from 'react';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });

  it('confirms table headers', () => {
    const { getByText } = render(<Display />);
    const balls = getByText(/balls/i);
    const strikes = getByText(/strikes/i);
    expect(balls).toBeInTheDocument();
    expect(strikes).toBeInTheDocument();
  });
});
