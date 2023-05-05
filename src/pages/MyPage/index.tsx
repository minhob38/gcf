/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions as authActions } from "@store/slices/authSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { useLoginMutation } from "@hooks/useApiMutation";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import { Link } from "react-router-dom";
import TextInput from "@components/Auth/TextInput";
import SignButton from "@components/Auth/SignButton";
import ErrorText from "@components/Auth/ErrorText";
import LoadingModal from "modals/SpinnerLoadingModal";
import { checkIsEmailFormat } from "@utils/common";
import { useEffect } from "react";

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

const MyPage: React.FC = () => {
  const signUpPath = "/sign-up";

  const errorMessage = useTypedSelector(
    (state) => state.rootReducer.errorReducer.loginErrorMessage,
  );
  const defaultEmail = useTypedSelector((state) => state.rootReducer.userReducer.email || "");
  const email = useTypedSelector((state) => state.rootReducer.authReducer.email);
  const defaultName = useTypedSelector((state) => state.rootReducer.userReducer.name || "");
  const name = useTypedSelector((state) => state.rootReducer.authReducer.name);
  const defaultPhoneNumber = useTypedSelector(
    (state) => state.rootReducer.userReducer.phoneNumber || "",
  );
  const phoneNumber = useTypedSelector((state) => state.rootReducer.authReducer.phoneNumber);

  const isLoading = useTypedSelector((state) => state.rootReducer.modalReducer.isLoading);

  const dispatch = useTypedDispatch();
  const loginMutation = useLoginMutation();

  useEffect(() => {
    dispatch(
      authActions.clickEdit({
        name: defaultName,
        email: defaultEmail,
        phoneNumber: defaultPhoneNumber,
      }),
    );
  }, []);

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.textInput(ev.target));
  };

  const handleLoginButtonClick = async () => {
    // // 입력정보가 없으면 에러
    // if (!email || !password) {
    //   dispatch(errorActions.throwLoginError("Enter email and password"));
    //   return;
    // }
    // // email 형식 체크
    // const isEmailFormat = checkIsEmailFormat(email);
    // if (!isEmailFormat) {
    //   dispatch(errorActions.throwLoginError("Invalid email format"));
    //   return;
    // }
    // await loginMutation.mutateAsync({ email, password });
    // 로그인 뒤, 나의정보 조회
    // query.refetch();
  };

  const handleFocus = () => dispatch(errorActions.catchLoginError());

  return (
    <>
      {isLoading && <LoadingModal />}
      <Header title="Welcome" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <InputBox onFocus={handleFocus}>
          <SubTitle>Email</SubTitle>
          <TextInput
            value={email || ""}
            placeholder={defaultEmail}
            type="email"
            name="email"
            onChange={handleTextInputChange}
            disabled={true}
          />
        </InputBox>
        <InputBox onFocus={handleFocus}>
          <SubTitle>Name</SubTitle>
          <TextInput
            value={name || ""}
            placeholder={defaultName}
            type="text"
            name="name"
            onChange={handleTextInputChange}
          />
        </InputBox>
        <InputBox onFocus={handleFocus}>
          <SubTitle>Mobile</SubTitle>
          <TextInput
            value={phoneNumber || ""}
            placeholder={defaultPhoneNumber}
            type="text"
            name="phoneNumber"
            onChange={handleTextInputChange}
          />
        </InputBox>
        <ErrorText text={errorMessage} />
        <SignButtonContainer>
          <SignButton onClick={handleLoginButtonClick} label="Login" />
        </SignButtonContainer>
        <LinkButton path={signUpPath} title="create an account ?" />
      </Content>
    </>
  );
};

export default MyPage;
