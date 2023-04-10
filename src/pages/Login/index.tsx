/** @jsxImportSource @emotion/react */
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import SignUp from "@components/Login/SignIn";
import SignIn from "@components/Login/SignInTemp";

const Login = () => {
  return (
    <>
      <Header title="Welcome" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <SignUp />
        <SignIn />
      </Content>
    </>
  );
};

export default Login;
