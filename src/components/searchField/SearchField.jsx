import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from './SearchField.styled';

const SearchField = ({ onSubmit }) => {
  const [searchField, setSearchField] = useState('');

  const reset = () => {
    setSearchField('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchField.trim()) {
      alert('Enter the word to search for');
    } else {
      onSubmit(searchField);
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="searchField"></label>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        name="searchField"
        value={searchField}
        onChange={e => setSearchField(e.target.value.toLowerCase())}
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchField;
