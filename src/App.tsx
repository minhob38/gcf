import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Plane from "./components/Plane";
import Train from "./components/Train";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";

function App() {
  return (
    <>
      <Home />
      <Button />
      <LinkButton path="/plane" />
      <LinkButton path="/train" />
      <Routes>
        <Route path="/plane" element={<Plane />}></Route>
        <Route path="/train" element={<Train />}></Route>
      </Routes>
    </>
  );
}

export default App;
