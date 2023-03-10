import { useState, useEffect, useMemo, createContext, useContext } from "react";

export function usePokemonSource() {
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("./pokemon.json")
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, []);

    const filterPokemon = useMemo(
        () =>
            [...pokemon]
                .filter((p) =>
                    p.name.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => a.name.localeCompare(b.name))
                .slice(0, 10),
        [search, pokemon]
    );
    return { pokemon: filterPokemon, search, setSearch };
}

const PokemonContext = createContext();

export const usePokemon = () => {
    return useContext(PokemonContext);
};

export function PokemonProvider({ children }) {
    return (
        <PokemonContext.Provider value={usePokemonSource()}>
            {children}
        </PokemonContext.Provider>
    );
}
