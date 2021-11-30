import React, { Component } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import ResetButton from '../ResetButton';

export class Feedback extends Component {
  static deafaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  onResetButton = () => {
    this.setState({
      good: this.props.initialValue,
      neutral: 0,
      bad: 0,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.floor((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const stateArray = Object.keys(this.state);

    return (
      <>
        <Section title="Cafe Expresso" mainTitle={true} />
        <Section title="Please leave feedback" flex={false} vertical={false}>
          <FeedbackOptions
            options={stateArray}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics" flex={true} vertical={true}>
          {total !== 0 ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                percent={percent}
              />
              <ResetButton onResetButton={this.onResetButton} />
            </>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
