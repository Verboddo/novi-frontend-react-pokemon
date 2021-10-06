import axios from "axios";
import {useEffect, useState} from "react";
import './Pokemon.css'

function Pokemons({children}) {
    const [pokemonData, setPokemonData] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${children}`)

                setPokemonData(result.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {pokemonData &&
            <article className="pokemon-container">
                <h2>{pokemonData.name}</h2>
                <img src={pokemonData.sprites.front_default} alt="pokemon" height='100px' width='100px'/>
                <p>Moves: {pokemonData.moves.length}</p>
                <p>Weight: {pokemonData.weight}</p>
                <div className="abilities-container">Abilities:</div>
                {pokemonData.abilities.map((ability) => {
                    return <p key={ability.ability.name} className="abilities">{ability.ability.name}</p>
                })}
            </article>}
        </div>
    )
}

export default Pokemons