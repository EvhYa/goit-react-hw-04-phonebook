import { Container } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ filter, handleChange }) {
  return (
    <Container>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        onChange={handleChange}
        id="filter"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name you want to find"
      />
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
