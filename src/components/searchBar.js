import React, { useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput} />

    );
}
export default SearchBar;