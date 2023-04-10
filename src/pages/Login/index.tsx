/** @jsxImportSource @emotion/react */
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import SignIn from "@components/Login/SignIn";
import SignUp from "@components/Login/SignInTemp";

const Login = () => {
  return (
    <>
      <Header title="Welcome" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <SignIn />
        <SignUp />
      </Content>
    </>
  );
};

export default Login;
