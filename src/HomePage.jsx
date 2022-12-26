import React from "react";
import PokemonList from "./PokemonList";
import SearchBox from "./SearchBox";
import { PokemonProvider } from "./store";

const HomePage = () => {
    return (
        <>
            <h1>Pokemon</h1>
            <PokemonProvider>
                <SearchBox />
                <PokemonList />
            </PokemonProvider>
        </>
    );
};

export default HomePage;
