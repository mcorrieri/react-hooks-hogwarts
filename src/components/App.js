import React from "react";
import Nav from "./Nav";
import HogTileList from "./HogTileList";
import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogTileList hogInfo={hogs} />
    </div>
  );
}

export default App;
