import css from './Options.module.css';
import { useEffect } from 'react';

export function Options({
  setFeedbGood,
  setFeedbNeutral,
  setFeedbBad,
  reset,
  setFeedbreset,
}) {
  return (
    <div className={css.options}>
      <button type="button" className={css.button} onClick={setFeedbGood}>
        Good
      </button>
      <button type="button" className={css.button} onClick={setFeedbNeutral}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={setFeedbBad}>
        Bad
      </button>
      {reset && (
        <button type="button" className={css.button} onClick={setFeedbreset}>
          Reset
        </button>
      )}
    </div>
  );
}
