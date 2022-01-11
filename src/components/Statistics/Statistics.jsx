import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.list__item}>Good: {good}</li>
      <li className={s.list__item}>Neutral: {neutral}</li>
      <li className={s.list__item}>Bad: {bad}</li>
      <li className={`${s.list__item} ${s.total}`}>Total: {total}</li>
      <li className={`${s.list__item} ${s.total}`}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
