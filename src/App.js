import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

function App() {
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

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Pokemon</h1>
                            <SearchBox
                                search={search}
                                onChangeHandle={setSearch}
                            />
                            <PokemonList pokemon={filterPokemon} />
                        </>
                    }
                />
                <Route
                    path="pokemon/:id"
                    element={<Pokemon pokemon={pokemon} />}
                />
                <Route
                    path="*"
                    element={
                        <>
                            <h1>No Pokemon Found</h1>
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
