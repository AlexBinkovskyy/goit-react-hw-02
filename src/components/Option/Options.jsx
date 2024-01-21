import css from './Options.module.css';

export function Options({
  setFeedbGood,
  setFeedbNeutral,
  setFeedbBad,
  checkFeedB,
  setFeedbReset,
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
      {checkFeedB && (
        <button type="button" className={css.button} onClick={setFeedbReset}>
          Reset
        </button>
      )}
    </div>
  );
}
