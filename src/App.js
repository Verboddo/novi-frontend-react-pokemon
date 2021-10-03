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
    }, [offSet])


    return (
        <>
            <div className="button-container">
                <PreviousButton setOffSet={setOffSet} offSet={offSet}>Vorige</PreviousButton>
                <NextButton setOffSet={setOffSet} offSet={offSet}>Volgende</NextButton>
            </div>
            {/*Er wordt ook verwezen naar de <div> element hieronder
            Het lijkt er dus op dat alles 2x gerenderd wordt: zie foutmelding hieronder van de console:
            Warning: Encountered two children with the same key, `52`. Keys should be unique so that components maintain their identity across updates.
            Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    at div
    at div
    at Pokemons (http://localhost:3000/static/js/main.chunk.js:807:3)
    at div
    at App (http://localhost:3000/static/js/main.chunk.js:200:87)*/}
            <div>{pokemon}</div>
        </>
    );
}

export default App;
