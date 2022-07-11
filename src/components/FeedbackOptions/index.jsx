import PropTypes from 'prop-types';
import i from './index.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={i.feedback}>
      {options.map(name => {
        return (
          <div key={name}>
            <button
              className={i.btn}
              onClick={() => onLeaveFeedback(name)}
              type="button"
              name={name}
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
