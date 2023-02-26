import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Hero>
        <Nav />
      </Hero>
    </>
  );
}

export default App;
