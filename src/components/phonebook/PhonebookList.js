import PropTypes from 'prop-types';
import man from './img/man.jpg';
import woman from './img/woman.jpg';

export const PhonebookList = ({ items, onRemove }) => {
  function icon(gender) {
    if (gender === 'man') {
      return <img src={man} alt="contact-icon" className="gender-icon" />;
    }
    if (gender === 'woman') {
      return <img src={woman} alt="contact-icon" className="gender-icon" />;
    }
  }
  const itemList = items.map(({ id, name, number, gender }) => {
    return (
      <li key={id} className="list-item">
        {icon(gender)}
        <p>
          {name}: {number}
        </p>
        <button
          className="delete-btn"
          type="button"
          onClick={() => onRemove(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{itemList}</ul>;
};

PhonebookList.propTypes = {
  items: PropTypes.array,
  onRemove: PropTypes.func,
};
