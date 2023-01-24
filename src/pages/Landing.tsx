/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import Header from "@components/Header";
import Content from "@components/Content";
import Button from "@components/Button";
import Scroll from "@components/Scroll";

import * as size from "@constants/size";
import * as margins from "@constants/margins";

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

const Landing = () => {
  return (
    <>
      <Header title="GCF CAR"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <ButtonContainer>
          <Button title="Buy/New" width="100px" height="40px"></Button>
          <Button title="Buy/Used" width="100px" height="40px"></Button>
          <Button title="Rent/New" width="100px" height="40px"></Button>
        </ButtonContainer>
        <Scroll direction="y" height="calc(100% - 127px - 10px)"></Scroll>
      </Content>
    </>
  );
};

export default Landing;
