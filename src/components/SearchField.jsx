import { useState } from 'react';

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
    reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchField"></label>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
        name="searchField"
        value={searchField}
        onChange={e => setSearchField(e.target.value.toLowerCase())}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchField;
