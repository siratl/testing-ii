import React, { Component } from 'react';
import './App.css';

import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard Outcome={this.handleSwingOutcome} />
      </div>
    );
  }

  handleSwingOutcome = event => {
    const outcome = event.target.textContent;
    let { balls, strikes } = this.state;
    switch (outcome) {
      case 'Strike':
        if (strikes < 2) {
          strikes = this.state.strikes + 1;
        } else {
          balls = 0;
          strikes = 0;
        }
        break;
      case 'Ball':
        if (balls < 3) {
          balls = this.state.balls + 1;
        } else {
          balls = 0;
          strikes = 0;
        }
        break;
      case 'Foul':
        if (strikes < 2) {
          strikes++;
        }
        break;
      case 'Hit':
        balls = 0;
        strikes = 0;
        break;
      default:
        throw new Error('Outcome Invalid.');
    }
    this.setState({
      balls,
      strikes,
    });
  };
}

export default App;
