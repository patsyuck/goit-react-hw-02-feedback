import React, { Component, Fragment } from 'react';
import './App.css';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import Panel from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /*incrementFeedback = feedback => () => {
    this.setState({ [feedback]: this.state[feedback] + 1 });
  };*/

  incrementFeedback = e => {
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (100 * this.state.good) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const opt = ['good', 'neutral', 'bad'];
    return (
      <Fragment>
        <Panel title="Please leave feedback">
          <FeedbackOptions
            /*options={this.state}*/
            options={opt}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Panel>
        <Panel title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Panel>
      </Fragment>
    );
  }
}
