import React, { Component, Fragment } from 'react';

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  incrementNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  incrementBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (100 * this.state.good) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  }

  render() {
    return (
      <Fragment>
        <div>
          <h2>Please leave feedback</h2>
          <button onClick={this.incrementGood}>Good</button>
          <button onClick={this.incrementNeutral}>Neutral</button>
          <button onClick={this.incrementBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.good + this.state.neutral + this.state.bad}</p>
          <p>
            Positive feedback:{' '}
            {(100 * this.state.good) /
              (this.state.good + this.state.neutral + this.state.bad)}
            %
          </p>
        </div>
      </Fragment>
    );
  }
}
