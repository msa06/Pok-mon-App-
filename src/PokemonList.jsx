import React from "react";
import { Link } from "react-router-dom";
import { usePokemon } from "./store";

const PokemonList = () => {
    const { pokemon } = usePokemon();
    return (
        <>
            <ul className="pokemonlist">
                {pokemon.map((p) => (
                    <Link to={`/pokemon/${p.id}`} key={p.id}>
                        <li key={p.id} className="pokemonitem">
                            <div className="pokemon-img">
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                                    alt=""
                                />
                                <h3 className="pokemon-title">{p.name}</h3>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default PokemonList;
