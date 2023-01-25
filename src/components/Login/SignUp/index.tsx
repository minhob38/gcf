/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/Landing/Button";
import Scroll from "@components/common/Scroll";
import Image from "@components/common/Image";

import * as size from "@constants/size";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import CarCard from "@components/Landing/CarCard";

import checkedImage from "@assets/images/checked-24x24.svg";

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

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 15px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
`;

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

// = ButtonContainer height + margin을 줄 height
const SCROLL_BOTTOM_MARGIN = 70 + 20;

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

const ContinueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 50px;
  margin: 0 auto 44px auto;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const SignUp = () => {
  return (
    <>
      <Label>
        <ImageBox>
          <Image src={checkedImage} alt="checked" height="24px" />
        </ImageBox>
        <CheckboxInput type="checkbox" name="email" />
        <Title>Create Account, New to GCF CAR</Title>
      </Label>
      <InputBox>
        <SubTitle>First and last name</SubTitle>
        <TextInput placeholder="John Doe" type="text" name="name" />
      </InputBox>
      <InputBox>
        <SubTitle>Email</SubTitle>
        <TextInput placeholder="gcf@gmail.com" type="email" name="email" />
      </InputBox>
      <InputBox>
        <SubTitle>Create a password</SubTitle>
        <TextInput placeholder="password" type="password" name="password" />
      </InputBox>
      <ContinueButton onClick={() => alert("백엔드 연동 필요")}>Continue</ContinueButton>
    </>
  );
};

export default SignUp;
