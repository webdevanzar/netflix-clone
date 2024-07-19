import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Rowpost/RowPost";
import {originals ,action,horror,comedy,romance } from './urls';


function App() {
  return (
    <div className="App">

        <NavBar />
        <Banner />
        <RowPost  url={originals}  title='Netflix Originals' />
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={horror} title='Horror'  />
        <RowPost url={comedy} title='comedy' isSmall />
        <RowPost url={romance} title='Romance'  />
    </div>
  );
}

export default App;
