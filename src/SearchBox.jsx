import React from "react";

const SearchBox = ({ search, onChangeHandle }) => {
    return (
        <input
            className="searchbox"
            placeholder="Search"
            value={search}
            onChange={(event) => onChangeHandle(event.target.value)}
        />
    );
};

export default SearchBox;
