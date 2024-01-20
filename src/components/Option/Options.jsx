import css from './Options.module.css';
import { useEffect } from 'react';

export function Options({ setFeedbGood, setFeedbNeutral, setFeedbBad }) {
  return (
    <div className={css.options}>
      <button type="button" className={css.button} onClick={setFeedbGood}>
        good
      </button>
      <button type="button" className={css.button} onClick={setFeedbNeutral}>
        neutral
      </button>
      <button type="button" className={css.button} onClick={setFeedbBad}>
        bad
      </button>
    </div>
  );
}
