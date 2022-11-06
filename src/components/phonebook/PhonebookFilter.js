import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filterSelector';
import { filterNameContact } from 'redux/filter/filterSlice';

export const PhonebookFilter = () => {
  const filterId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(filterNameContact(event.target.value));
  };

  return (
    <form className="phonebook__form">
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={filterId}
        value={filter}
        type="text"
        name="filter"
        onChange={filterChange}
        className="input-phonebook"
      />
    </form>
  );
};
