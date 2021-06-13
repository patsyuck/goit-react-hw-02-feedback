/*import { Component } from 'react';

export class FeedbackOptions extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.incrementGood}>Good</button>
                <button onClick={this.incrementNeutral}>Neutral</button>
                <button onClick={this.incrementBad}>Bad</button>
            </div>
        )
    }
};*/

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback('good')}>Good</button>
      <button onClick={onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
