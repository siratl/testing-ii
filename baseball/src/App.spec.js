import React from 'react';

import { render, fireEvent } from 'react-testing-library'; 
import 'jest-dom/extend-expect'; 

import App from './App';

describe('<App />', () => {

  it('renders without crashing', () => {
    render(<App />);
  });

  const { getByTestId } = render(<App />);

  it('outcome(hit) resets balls and strikes', () => {
    fireEvent.click(getByTestId('btn-hit'));
    expect(getByTestId('balls').textContent).toBe('0');
    expect(getByTestId('strikes').textContent).toBe('0');
  });

  it('outcome(foul) adds count to strikes up to 2', () => {
    fireEvent.click(getByTestId('btn-hit'));

    fireEvent.click(getByTestId('btn-foul'));
    expect(getByTestId('strikes').textContent).toBe('1');
    fireEvent.click(getByTestId('btn-foul'));
    expect(getByTestId('strikes').textContent).toBe('2');
    fireEvent.click(getByTestId('btn-foul'));
    expect(getByTestId('strikes').textContent).toBe('2');
  });

  it('outcome(strike) counts to strike and resets at 3', () => {
    fireEvent.click(getByTestId('btn-hit'));

    fireEvent.click(getByTestId('btn-strike'));
    expect(getByTestId('strikes').textContent).toBe('1');
    fireEvent.click(getByTestId('btn-strike'));
    expect(getByTestId('strikes').textContent).toBe('2');
    fireEvent.click(getByTestId('btn-strike'));
    expect(getByTestId('strikes').textContent).toBe('0');
  });

  it('outcome(balls) counts to balls and resets at 4', () => {
    fireEvent.click(getByTestId('btn-hit'));

    fireEvent.click(getByTestId('btn-ball'));
    expect(getByTestId('balls').textContent).toBe('1');
    fireEvent.click(getByTestId('btn-ball'));
    expect(getByTestId('balls').textContent).toBe('2');
    fireEvent.click(getByTestId('btn-ball'));
    expect(getByTestId('balls').textContent).toBe('3');
    fireEvent.click(getByTestId('btn-ball'));
    expect(getByTestId('balls').textContent).toBe('0');
  });

})