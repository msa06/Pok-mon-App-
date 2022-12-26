import React from "react";
import PokemonList from "./PokemonList";
import SearchBox from "./SearchBox";

const HomePage = () => {
    return (
        <>
            <h1>Pokemon</h1>

            <SearchBox />
            <PokemonList />
        </>
    );
};

export default HomePage;
