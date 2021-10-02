import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemons from "./Components/Pokemon/Pokemons";
import axios from "axios";
import NextButton from "./Components/Buttons/NextButton";
import PreviousButton from "./Components/Buttons/PreviousButton";

function App() {

    const [pokemon, setPokemon] = useState()
    const [offSet, setOffSet] = useState(0)

    useEffect(() => {
        async function testData() {
            const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`)

            const results = pokemons.data.results
            const pokemonList = results.map((pokemon) => <Pokemons key={pokemon.name}>{pokemon.name}</Pokemons>)

            setPokemon(pokemonList)

            console.log(pokemonList)
        }
        testData()
    },[offSet])


    return (
        <>
            <div className="button-container">
            <PreviousButton setOffSet={setOffSet} offSet={offSet}>Vorige</PreviousButton>
            <NextButton setOffSet={setOffSet} offSet={offSet}>Volgende</NextButton>
            </div>
            <div>{pokemon}</div>
        </>
    );
}

export default App;
