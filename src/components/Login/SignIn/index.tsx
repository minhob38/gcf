/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/Landing/Button";
import Scroll from "@components/common/Scroll";
import Image from "@components/common/Image";

import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";

import checkedImage from "@assets/images/checked-24x24.svg";

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
  return (
    <>
      <Label>
        <ImageBox>
          <Image src={checkedImage} alt="checked" height="24px" />
        </ImageBox>
        <CheckboxInput type="checkbox" name="email" />
        <Title>Sign in, Already a customer?</Title>
      </Label>
    </>
  );
};

export default SignIn;
