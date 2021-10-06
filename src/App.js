import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemons from "./Components/Pokemon/Pokemons";
import axios from "axios";
import NextButton from "./Components/Buttons/NextButton";

function App() {
    const [pokemonURL, setPokemonURL] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemon, setPokemon] = useState("")
    const [nextButton, setNextButton] = useState(false)
    const [previousButton, setPreviousButton] = useState(false)

    function nextClick() {
        setPokemonURL(pokemon.next);
        setPreviousButton(false);
    }

    function previousClick() {
        setPokemonURL(pokemon.previous);
        setNextButton(false);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(pokemonURL)
                setPokemon(result.data)

            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [pokemonURL])


    return (
        <>
            {pokemon &&
            <nav className="button-container">
                <NextButton
                    name="Vorige"
                    disabled={!pokemon.previous}
                    onClick={previousClick}/>

                <NextButton
                    name="Volgende"
                    disabled={!pokemon.next}
                    onClick={nextClick}/>
            </nav>}

            <main className="container">
                {pokemon && pokemon.results.map((result) => {
                    return <Pokemons key={result.name}>{result.name}</Pokemons>
                })}
            </main>
        </>
    );
}

export default App;
