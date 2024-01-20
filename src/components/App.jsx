import { useState, useEffect } from 'react';
import { Description } from './Header/Description';
import { Options } from './Header/Options';
import { Feedback } from './Header/Feedback';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      <Options/>
      <Feedback/>
    </div>
  );
};
