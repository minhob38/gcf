/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/authSlice";
import { useApiMutation } from "@hooks/useApiMutation";
import { ISignInRequest } from "types/types";
import { signInApi } from "@apis/functions";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import { useEffect, useState } from "react";

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 15px 0 15px ${margins.SIDE_MAIN_MARGIN};
`;

const CheckboxInput = styled.input`
  all: unset;
`;

const Title = styled.div`
  font: ${fonts.FONT_LARGE_600};
  color: ${colors.BLACK_1};
  margin: 0 0 0 0;
`;

const ImageBox = styled.div`
  margin: 0 5px 0 0;
`;

const SubTitle = styled.div`
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
  margin: 0 0 5px 0;
`;

const TextInput = styled.input`
  all: unset;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${colors.GRAY_1};
  text-align: center;
  font: ${fonts.FONT_MEDIUM_400};
  &::placeholder {
    color: ${colors.GRAY_1};
  }
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

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 50px;
  margin: 50px auto 44px auto;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.ERROR_RED};
  margin: 0 0 5px 0;
`;
const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useTypedSelector((state) => state.rootReducer.authReducer.email);
  const password = useTypedSelector((state) => state.rootReducer.authReducer.password);

  const dispatch = useTypedDispatch();
  const {
    mutate: signInMutate,
    isError: isSignInError,
    isSuccess: isSignInSucces,
  } = useApiMutation<ISignInRequest>(signInApi);

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };

  const handleSignInButtonClick = () => {
    if (!email || !password) {
      setErrorMessage("Enter email and password");
      return;
    }
    signInMutate({ email, password });
  };

  useEffect(() => {
    if (isSignInError) {
      setErrorMessage("sign in fail");
    }
  }, [isSignInError]);

  return (
    <>
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
        <ErrorText>{errorMessage ? errorMessage : ""}</ErrorText>
        <SignUpButton onClick={handleSignInButtonClick}>Sign in</SignUpButton>
      </Content>
    </>
  );
};

export default SignIn;