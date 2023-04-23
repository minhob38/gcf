/** @jsxImportSource @emotion/react */
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/authSlice";
import { useApiMutation, useSignUpMutation } from "@hooks/useApiMutation";
import { ISignUpRequest } from "types/types";
import { signUpApi } from "@apis/functions";
import { useEffect, useState } from "react";
import TextInput from "@components/Auth/TextInput";
import SignButton from "@components/Auth/SignButton";
import ErrorText from "@components/Auth/ErrorText";
import { error } from "console";

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

const SignUp = () => {
  const dispatch = useTypedDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useTypedSelector((state) => state.rootReducer.authReducer.email);
  const password = useTypedSelector((state) => state.rootReducer.authReducer.password);
  const rePassword = useTypedSelector((state) => state.rootReducer.authReducer.rePassword);
  const name = useTypedSelector((state) => state.rootReducer.authReducer.name);

  const signUpMutation = useSignUpMutation();

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };

  const handleSignUpButtonClick = () => {
    // 입력정보가 없으면 에러
    if (!email || !password || !name || !rePassword) {
      setErrorMessage("Enter name, email and password");
      return;
    }

    // 비밀번호/재확인 비밀번호가 같은 에러
    if (password !== rePassword) {
      setErrorMessage("Password and re-password should be same");
      return;
    }

    // 비밀번호/재확인 비밀번호가 같은 에러
    if (password.length < 8 || password.length > 20) {
      setErrorMessage("Password should be between 8 and 20 characters");
      return;
    }

    // TODO: 비밀번호 정규식
    signUpMutation.mutate({ fullName: name, email, password, rePassword });
  };

  useEffect(() => {
    const error = signUpMutation.error;
    if (error) {
      setErrorMessage((error as Error).message);
    }
  }, [signUpMutation.error]);

  return (
    <>
      <Header title="Welcome" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <InputBox>
          <SubTitle>First and last name</SubTitle>
          <TextInput
            placeholder="John Doe"
            type="text"
            name="name"
            onChange={handleTextInputChange}
          />
        </InputBox>
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
        <InputBox>
          {/* <SubTitle>Confirm Password</SubTitle> */}
          <TextInput
            placeholder="confirm password"
            type="password"
            name="re-password"
            onChange={handleTextInputChange}
          />
        </InputBox>
        <ErrorText text={errorMessage} />
        <SignButtonContainer>
          <SignButton label="Sign up" onClick={handleSignUpButtonClick} />
        </SignButtonContainer>
      </Content>
    </>
  );
};

export default SignUp;
