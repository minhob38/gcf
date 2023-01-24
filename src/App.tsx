/** @jsxImportSource @emotion/react */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Home from "./components/Home";
import Plane from "./components/Plane";
import Train from "./components/Train";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import { subscribeServer, notifyServer } from "./utils/subscribe";
import { Landing } from "./pages/Landing";

const Wrapper = styled.div({
  width: "100%",
  height: "100%",
});

const buttonStyle = css`
  all: unset;
  display: block;
  background-color: #f3e192;
  width: 10rem;
  height: 2rem;
  &:hover {
    background-color: #ebc7c7;
    border: none;
  }
  cursor: pointer;
`;

function App() {
  console.log(process.env.NODE_ENV);

  return (
    <Wrapper>
      {/* <Home /> */}
      {/* <Button label="Click 📝" /> */}
      {/* <LinkButton path="/plane" /> */}
      {/* <LinkButton path="/train" /> */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/plane" element={<Plane />}></Route> */}
        {/* <Route path="/train" element={<Train />}></Route> */}
      </Routes>
      {/* <button css={buttonStyle} onClick={() => subscribeServer()}>
        Server Subscription
      </button>
      <button css={buttonStyle} onClick={() => notifyServer()}>
        Server Notification
      </button> */}
    </Wrapper>
  );
}

export default App;
