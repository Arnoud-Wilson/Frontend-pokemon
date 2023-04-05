import React, {useState, useEffect} from "react";
import axios from "axios";
import GetAllData from "./GetData";

function GetPokemons({offset}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function getTwentyPokemons() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)

                setResult(response.data.results);
            }
            catch (error) {
                console.error(error);
            }
        }
        void getTwentyPokemons();
    }, [offset]);

    return (
        result.length > 0 &&
            result.map((pokemon) => {
                 return <GetAllData
                    search = {pokemon.name}
                />
            }));
}

export default GetPokemons;
