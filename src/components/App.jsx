import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import ShortUniqueId from 'short-unique-id';

const id = new ShortUniqueId();

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = evtTargetName => {
    this.setState(prevState => {
      return {
        [evtTargetName]: (prevState[evtTargetName] += 1),
        ...this.state,
      };
    });
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = values.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percentage = this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : 0;
    return percentage;
  };
  render() {
    const options = Object.keys(this.state);

    return (
      <div
        style={{
          height: 'auto',
          display: 'block',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          marginLeft: 40,
        }}
      >
        <FeedbackOptions
          id={id}
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          id={id}
          options={options}
          state={this.state}
          countTotalFeedback={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
