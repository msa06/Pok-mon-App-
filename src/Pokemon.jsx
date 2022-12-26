import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePokemon } from "./store";

const Pokemon = () => {
    const { pokemon } = usePokemon();
    const { id } = useParams();
    const pokemonData = pokemon.find((p) => p.id === +id);

    return (
        <div>
            <Link to="/">
                <h1>Home</h1>
            </Link>

            <div className="pokemon-detail">
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData["id"]}.png`}
                        alt=""
                    />
                </div>
                <div>
                    <h3 className="pokemon-title">
                        Name: {pokemonData["name"]}
                    </h3>
                    <p className="pokemon-description">
                        Type: {pokemonData["type"]}
                    </p>
                    <p className="pokemon-description">
                        Hp: {pokemonData["hp"]}
                    </p>

                    <p className="pokemon-description">
                        Attack: {pokemonData["attack"]}
                    </p>
                    <p className="pokemon-description">
                        Defense: {pokemonData["defense"]}
                    </p>
                    <p className="pokemon-description">
                        Special Attack: {pokemonData["special_attack"]}
                    </p>
                    <p className="pokemon-description">
                        Special Defense: {pokemonData["special_defense"]}
                    </p>
                    <p className="pokemon-description">
                        Speed: {pokemonData["speed"]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
