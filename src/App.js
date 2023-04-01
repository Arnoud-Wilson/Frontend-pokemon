import React from "react";
import Button from "./components/Button";
import GetAllData from "./components/GetData";
import './App.css';
import Pokemon from "./assets/International_Pokémon_logo.svg.png"

function App() {

  return (
      <>
        <img className="pokemon-logo" src={ Pokemon }  alt="pokemon logo"/>
        {/*<div className="button-wrapper" >*/}
        {/*    <Button*/}
        {/*        name="vorige"*/}
        {/*    />*/}
        {/*    <Button*/}
        {/*        name="volgende"*/}
        {/*        onClick={GetAllData}*/}
        {/*    />*/}
        {/*</div>*/}

        <GetAllData />

      </>

  );
}

export default App;
