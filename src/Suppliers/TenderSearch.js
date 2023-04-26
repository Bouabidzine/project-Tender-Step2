import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchTendersStart } from '../redux/slice/tenderSearchSlice';


function TenderSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.tenderSearch.searchQuery);
  const loading = useSelector((state) => state.tenderSearch.loading);
  const error = useSelector((state) => state.tenderSearch.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTendersStart(searchTerm));
  };

  return (
    <div>
      <h2>Search for Existing Tenders</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search:</label>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} required />
        </div>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchQuery.length > 0 && (
        <ul>
          {searchQuery.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TenderSearch;