import { Component } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const summFeedbacks = this.countTotalFeedback();
    const goodFeedbacksAmount = this.state.good;
    return Math.round((goodFeedbacksAmount * 100) / summFeedbacks);
  }

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const percentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // makes an array of keys from State
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={percentage}
            />
          )}
          {totalFeedbacks === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
