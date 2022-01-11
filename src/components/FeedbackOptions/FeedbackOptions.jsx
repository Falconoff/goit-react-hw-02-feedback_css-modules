import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.scss';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(item => (
        <li key={item}>
          <button
            type="button"
            className={`${s.btn} ${s[item]}`}
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
