import axios from "axios";
import {useEffect, useState} from "react";
import './Pokemon.css'

function Pokemons({ children }) {
    const [pokemonName, setPokemonName] = useState()
    const [pokemonImage, setPokemonImage] = useState()
    const [pokemonMoves, setPokemonMoves] = useState()
    const [pokemonWeight, setPokemonWeight] = useState()
    const [pokemonAbilities, setPokemonAbilities] = useState()

    useEffect(() => {
        async function fetchData() {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${children}`)

            const pokemonName = pokemon.data.name
            setPokemonName(pokemonName)

            const pokemonImage = pokemon.data.sprites.front_default
            setPokemonImage(pokemonImage)

            const pokemonMoves = pokemon.data.moves.length
            setPokemonMoves(pokemonMoves)

            const pokemonWeight = pokemon.data.weight
            setPokemonWeight(pokemonWeight)

            const pokemonAbilities = pokemon.data.abilities
            const allPokemonAbilities = pokemonAbilities.map((ability) => <p className="abilities">{ability.ability.name}</p>)
            setPokemonAbilities(allPokemonAbilities)
        }

        fetchData()
    }, [children])

    return(
        <div className="pokemon-container">
            <h2>{pokemonName}</h2>
            <img src={pokemonImage} alt="pokemon" height='100px' width='100px'/>
            <p>Moves: {pokemonMoves}</p>
            <p>Weight: {pokemonWeight}</p>
            <div className="abilities-container">Abilities: {pokemonAbilities}</div>
        </div>
    )
}

export default Pokemons