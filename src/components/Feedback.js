import './Feedback.css';

/*const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback('good')}>Good</button>
      <button onClick={onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};*/

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button class="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
