/** @jsxImportSource @emotion/react */
import Header from "@components/Header";
import Content from "@components/Content";
import Scroll from "@components/Scroll";
import * as size from "@constants/size";

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

const Landing = () => {
  return (
    <>
      <Header title="GCF CAR"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Scroll direction="y" height="calc(100% - 127px - 10px)"></Scroll>
      </Content>
    </>
  );
};

export default Landing;
