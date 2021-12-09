import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Input = ({ label, ...arg }) => {
  const id = nanoid();

  return (
    <div className="wrapper-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...arg} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  arg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]),
};

export default Input;
