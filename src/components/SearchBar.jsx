import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="search-bar" style={{ marginBottom: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "80%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default SearchBar;
