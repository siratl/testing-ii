import React from 'react';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('confirms header and buttons', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/Swing Outcome/)).toBeInTheDocument();
    expect(getByText(/ball/i)).toBeInTheDocument();
    expect(getByText(/strike/i)).toBeInTheDocument();
    expect(getByText(/foul/i)).toBeInTheDocument();
    expect(getByText(/hit/i)).toBeInTheDocument();
  });
});
