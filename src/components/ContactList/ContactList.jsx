import { Container, List } from './ContactList.styled';
import PropTypes from 'prop-types';

export function ContactList({ contacts, removeItem }) {
  return (
    <Container>
      {contacts.length ? (
        <List>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} tel: {number}
              <button type="button" onClick={() => removeItem(id)}>
                Delete
              </button>
            </li>
          ))}
        </List>
      ) : (
        <p>Contact is not found</p>
      )}
    </Container>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};
