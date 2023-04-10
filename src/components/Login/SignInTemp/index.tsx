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

const SignIn = () => {
  const checkStatus = useTypedSelector((state) => state.rootReducer.authReducer.checkStatus);
  const dispatch = useTypedDispatch();
  const handleCheckBoxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.checkSignIn());
  };

  return (
    <>
      <Label>
        <ImageBox>
          <Image
            src={checkStatus === "sign-in" ? checkedImage : uncheckedImage}
            alt={checkStatus === "sign-in" ? "checked" : "unchecked"}
            height="24px"
          />
        </ImageBox>
        <CheckboxInput
          type="checkbox"
          name="email"
          checked={checkStatus === "sign-in" ? true : false}
          onChange={handleCheckBoxChange}
        />
        <Title>Sign in, Already a customer?</Title>
      </Label>
    </>
  );
};

export default SignIn;
