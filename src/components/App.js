import React, { Component, Fragment } from 'react';
import './App.css';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Panel from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = feedback => () => {
    this.setState({ [feedback]: this.state[feedback] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <Panel title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Panel>
        <Panel title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Panel>
      </Fragment>
    );
  }
}
