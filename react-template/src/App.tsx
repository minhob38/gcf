import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "./components/Home";
import Plane from "./components/Plane";
import Train from "./components/Train";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";

const Wrapper = styled.div({
  width: "100%",
  height: "100%",
});

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <Wrapper>
      <Home />
      <Button label="Click 📝" />
      <LinkButton path="/plane" />
      <LinkButton path="/train" />
      <Routes>
        <Route path="/plane" element={<Plane />}></Route>
        <Route path="/train" element={<Train />}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
