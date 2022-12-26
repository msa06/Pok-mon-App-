import React from "react";
import { usePokemon } from "./store";

const SearchBox = () => {
    const { search, setSearch } = usePokemon();
    return (
        <input
            className="searchbox"
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
};

export default SearchBox;
