import React from "react";
import logo from "./logo.svg";
import  Navigation from "./components/Navigation";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Landing/>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}

export default App;
