import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const PhonebookFilter = ({ onChange }) => {
  const filterId = nanoid();
  return (
    <form className="phonebook__form">
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={filterId}
        type="text"
        name="filter"
        onChange={onChange}
        className="input-phonebook"
      />
    </form>
  );
};

PhonebookFilter.propTypes = {
  onChange: PropTypes.func,
};
