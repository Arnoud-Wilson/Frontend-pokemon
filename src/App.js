import React, {useState} from "react";
import Button from "./components/Button";
import GetPokemons from "./components/getPokemons";
import './App.css';
import Pokemon from "./assets/International_Pokémon_logo.svg.png"

function App() {
    const [offset, setOffset] = useState(0);

  return (
      <>
        <img className="pokemon-logo" src={ Pokemon }  alt="pokemon logo"/>
        <div className="button-wrapper" >
            <Button
                name="vorige"
                onClick={() => setOffset(offset - 20)}
                disabled = { offset <= 0 && true }
            />
            <Button
                name="volgende"
                onClick={() => setOffset(offset + 20)}
            />
        </div>
        <div className="outer-wrapper">
            <GetPokemons
                offset = {offset}
            />
      </div>
      <div className="button-wrapper" >
            <Button
                name="vorige"
                onClick={() => setOffset(offset - 20)}
                disabled = { offset <= 0 && true }
            />
            <Button
                name="volgende"
                onClick={() => setOffset(offset + 20)}
            />
      </div>
      </>
  );
}

export default App;

// TO DO: UNIEK LIST ITEM FOUT UITZOEKEN
