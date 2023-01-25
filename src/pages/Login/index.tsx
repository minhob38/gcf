/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/Landing/Button";
import Scroll from "@components/common/Scroll";

import * as size from "@constants/size";
import * as margins from "@constants/margins";
import CarCard from "@components/Landing/CarCard";
import SignUp from "@components/Login/SignUp";

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

const Login = () => {
  return (
    <>
      <Header title="GCF CAR"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <SignUp />
      </Content>
    </>
  );
};

export default Login;
