import React, {useEffect, useState} from 'react';
import axios from "axios";


function GetAllData() {
    const [result, setResult] = useState({ });
    const [abilities, setAbilities] = useState([ ]);

    const getAbilities = abilities.map((single) => {

        return (
            <li>{single.ability.name}</li>
        )
    })

    useEffect(() => {
    async function getData() {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff");

            setResult(response.data);
            setAbilities(response.data.abilities)
        }
        catch (error) {
            console.error(error);
        }
    }
    void getData();
    }, []);

        return (
            Object.keys(result).length > 0 &&
            <div key={result.id} className="pokemon-tile">
            <h2>{result.name}</h2>
            <img src={result.sprites.front_default} alt="pokemon"/>
            <h3>Moves: {result.moves.length}</h3>
            <h3>Weight: {result.weight}</h3>
            <h3>Abilities:</h3>
                <ul>
                    {getAbilities}
                </ul>
            </div>
        );
}


export default GetAllData;