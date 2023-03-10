import React from "react";
import "./App.css";
import Canvas from "./components/canvas/canvas";
import Constructor from "./components/constructor/constructor";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Constructor />

        <Canvas />
      </main>
    </div>
  );
}

export default App;
