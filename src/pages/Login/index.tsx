/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import Header from "@components/common/Header";
import Content from "@components/common/Content";

import * as size from "@constants/size";
import * as margins from "@constants/margins";
import SignUp from "@components/Login/SignUp";
import SignIn from "@components/Login/SignIn";

const Login = () => {
  return (
    <>
      <Header title="GCF CAR"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <SignUp />
        <SignIn />
      </Content>
    </>
  );
};

export default Login;
