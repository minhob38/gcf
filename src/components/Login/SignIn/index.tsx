/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Image from "@components/common/Image";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import checkedImage from "@assets/images/checked-24x24.svg";
import uncheckedImage from "@assets/images/unchecked-24x24.svg";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/authSlice";
import { useApiMutation } from "@hooks/useApiMutation";
import { ISignInRequest } from "types/types";
import { signInApi } from "@apis/functions";

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

const SignInButton = styled.div`
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
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.ERROR_RED};
  margin: 0 auto 0 auto;
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const SignIn = () => {
  const checkStatus = useTypedSelector((state) => state.rootReducer.authReducer.checkStatus);
  const email = useTypedSelector((state) => state.rootReducer.authReducer.email);
  const password = useTypedSelector((state) => state.rootReducer.authReducer.password);

  const dispatch = useTypedDispatch();
  const {
    mutate: signInMutate,
    isError: isSignInError,
    isSuccess: isSignInSucces,
  } = useApiMutation<ISignInRequest>(signInApi);
  const handleCheckBoxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.checkSignUp());
  };
  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };
  const handleSignInButtonClick = () => {
    if (!email || !password) return;
    signInMutate({ email, password });
  };

  return (
    <>
      {/* <Label>
        <ImageBox>
          <Image
            src={checkStatus === "sign-up" ? checkedImage : uncheckedImage}
            alt={checkStatus === "sign-up" ? "checked" : "unchecked"}
            height="24px"
          />
        </ImageBox>
        <CheckboxInput
          type="checkbox"
          name="email"
          checked={checkStatus === "sign-up" ? true : false}
          onChange={handleCheckBoxChange}
        />
        <Title>Create Account, New to GCF CAR</Title>
      </Label> */}
      {/* <InputBox>
        <SubTitle>First and last name</SubTitle>
        <TextInput
          placeholder="John Doe"
          type="text"
          name="name"
          onChange={handleTextInputChange}
        />
      </InputBox> */}
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
      {isSignInError && <ErrorText>Invalid email or password</ErrorText>}
      <SignInButton onClick={handleSignInButtonClick}>Sign in</SignInButton>
    </>
  );
};

export default SignIn;
