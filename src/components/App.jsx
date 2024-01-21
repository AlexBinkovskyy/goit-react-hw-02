import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Option/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const localeStorageFeedBacks = window.localStorage.getItem('feedbacks');
    return localeStorageFeedBacks !== null
      ? JSON.parse(localeStorageFeedBacks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

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

  function setFeedbReset() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const checkFeedB = Boolean(
    feedbacks.good || feedbacks.neutral || feedbacks.bad
  );
  return (
    <div>
      <Description />
      <Options
        setFeedbGood={setFeedbGood}
        setFeedbNeutral={setFeedbNeutral}
        setFeedbBad={setFeedbBad}
        checkFeedB={checkFeedB}
        setFeedbReset={setFeedbReset}
      />
      {checkFeedB ? (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
