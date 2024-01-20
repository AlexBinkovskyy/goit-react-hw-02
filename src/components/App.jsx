import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Option/Options';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function setFeedbGood() {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      good: feedbacks.good + 1,
    }));
  }

  function setFeedbNeutral() {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      neutral: feedbacks.neutral + 1,
    }));
  }

  function setFeedbBad() {
    setFeedbacks(feedbacks => ({
      ...feedbacks,
      bad: feedbacks.bad + 1,
    }));
  }

  let checkFeedB;
  feedbacks.good || feedbacks.neutral || feedbacks.bad
    ? (checkFeedB = true)
    : (checkFeedB = false);

  return (
    <div>
      <Description />
      <Options
        setFeedbGood={setFeedbGood}
        setFeedbNeutral={setFeedbNeutral}
        setFeedbBad={setFeedbBad}
      />
      {checkFeedB && (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
        />
      )}
    </div>
  );
};
