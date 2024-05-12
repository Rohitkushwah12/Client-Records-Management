import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by ID, Name, or Email"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
