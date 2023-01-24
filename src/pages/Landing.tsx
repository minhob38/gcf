// /** @jsxImportSource @emotion/react */
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { css } from "@emotion/react";
// import styled from "@emotion/styled";
// import Home from "./components/Home";
// import Plane from "./components/Plane";
// import Train from "./components/Train";
// import Button from "./components/Button";
// import LinkButton from "./components/LinkButton";
// import { subscribeServer, notifyServer } from "./utils/subscribe";

import Content from "@components/Content";
import Header from "@components/Header";
import * as size from "@constants/size";

// const Wrapper = styled.div({
//   width: "100%",
//   height: "100%",
// });

// const buttonStyle = css`
//   all: unset;
//   display: block;
//   background-color: #f3e192;
//   width: 10rem;
//   height: 2rem;
//   &:hover {
//     background-color: #ebc7c7;
//     border: none;
//   }
//   cursor: pointer;
// `;

const Landing = () => {
  console.log(process.env.NODE_ENV);

  return (
    <>
      <Header title="GCF CAR"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <div>h</div>
      </Content>
    </>
  );
};

export default Landing;
