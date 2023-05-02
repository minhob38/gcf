/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/CarService/Button";
import Scroll from "@components/common/Scroll";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import CarCard from "@components/CarService/CarCard";
import { useCarsSalesQuery } from "@hooks/useApiQuery";
import UsedCarSales from "@components/CarService/UsedCarSales";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0 15px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
  gap: 0 10px;
`;

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

// = ButtonContainer height + margin을 줄 height
const SCROLL_BOTTOM_MARGIN = 70 + 20;

const CarService = () => {
  return (
    <>
      <Header title="Car" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <ButtonContainer>
          <Button title="Buy/New" width="100px" height="40px"></Button>
          <Button title="Buy/Used" width="100px" height="40px"></Button>
          {/* <Button title="Rent/New" width="100px" height="40px"></Button> */}
        </ButtonContainer>
        <Scroll direction="y" height={`calc(100% - ${SCROLL_BOTTOM_MARGIN}px)`}>
          <UsedCarSales />
        </Scroll>
      </Content>
    </>
  );
};

export default CarService;
