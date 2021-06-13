/*import { Component } from 'react';

export class Statistics extends Component {
    
    render() {
        return (
            <div>
                <p>Good: </p>
                <p>Neutral: </p>
                <p>Bad: </p>
                <p>Total: </p>
                <p>Positive feedback: %</p>
            </div>
        )
    }
};*/

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: 0</p>
      <p>Positive feedback: 0%</p>
    </div>
  );
};

export default Statistics;
