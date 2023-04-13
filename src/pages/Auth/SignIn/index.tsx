/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/authSlice";
import { useApiMutation, useSignInMutation } from "@hooks/useApiMutation";
import { ISignInRequest } from "types/types";
import { signInApi } from "@apis/functions";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "@components/Auth/TextInput";
import SignButton from "@components/Auth/SignButton";
import ErrorText from "@components/Auth/ErrorText";
import Spinner from "animations/Spinner";
import Loading from "animations/Loading";
import LoadingModal from "modals/SpinnerLoadingModal";

const SubTitle = styled.div`
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
  margin: 0 0 5px 0;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 20px auto;
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const SignButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto 15px auto;
`;

const SLink = styled(Link)`
  all: unset;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
  text-decoration: underline;
`;

const LinkButton: React.FC<{ path: string; title: string }> = ({ path, title }) => {
  return <SLink to={path}>{title}</SLink>;
};

const SignIn: React.FC = () => {
  const signUpPath =
    window.location.hostname === "minhob38.github.io" ? "/gcf/sign-up" : "/sign-up";

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useTypedSelector((state) => state.rootReducer.authReducer.email);
  const password = useTypedSelector((state) => state.rootReducer.authReducer.password);
  const isLoading = useTypedSelector((state) => state.rootReducer.modalReducer.isLoading);
  const isSignInError = useTypedSelector((state) => state.rootReducer.errorReducer.isSignInError);

  const dispatch = useTypedDispatch();
  const signInMutation = useSignInMutation();

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };

  const handleSignInButtonClick = () => {
    if (!email || !password) {
      setErrorMessage("Enter email and password");
      return;
    }
    signInMutation.mutate({ email, password });
  };

  useEffect(() => {
    if (isSignInError) {
      setErrorMessage("sign in fail");
    }
  }, [isSignInError]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <Header title="Welcome" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <InputBox>
          <SubTitle>Email</SubTitle>
          <TextInput
            placeholder="gcf@gmail.com"
            type="email"
            name="email"
            onChange={handleTextInputChange}
          />
        </InputBox>
        <InputBox>
          <SubTitle>Password</SubTitle>
          <TextInput
            placeholder="password"
            type="password"
            name="password"
            onChange={handleTextInputChange}
          />
        </InputBox>
        <ErrorText text={errorMessage} />
        <SignButtonContainer>
          <SignButton onClick={handleSignInButtonClick} label="Sign in" />
        </SignButtonContainer>
        <LinkButton path={signUpPath} title="create an account ?" />
      </Content>
    </>
  );
};

export default SignIn;
