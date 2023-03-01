/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/CarService/Button";
import Scroll from "@components/common/Scroll";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import CarCard from "@components/Landing/CarCard";
import { ErrorBoundary } from "react-error-boundary";
import pickUpImage from "@assets/images/pickup-service.jpg";
import teleImage from "@assets/images/tele-service.png";
import moveImage from "@assets/images/move-service.png";
import carImage from "@assets/images/car-service.png";

import Image from "@components/common/Image";

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

const ServiceContainer = styled.div`
  display: flex;
  margin: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

const ServiceBox = styled.div`
  width: ;
`;

const Landing = () => {
  return (
    <>
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <ServiceContainer>
          <ServiceBox>
            <Image src={pickUpImage} alt="back" width="100%" />
          </ServiceBox>
          <ServiceBox>
            <Image src={teleImage} alt="back" width="100%" />
          </ServiceBox>
        </ServiceContainer>
        <ServiceContainer>
          <ServiceBox>
            <Image src={moveImage} alt="back" width="100%" />
          </ServiceBox>
          <ServiceBox>
            <Image src={carImage} alt="back" width="100%" />
          </ServiceBox>
        </ServiceContainer>
        {/* <ButtonContainer>
          <Button title="Buy/New" width="100px" height="40px"></Button>
          <Button title="Buy/Used" width="100px" height="40px"></Button>
          <Button title="Rent/New" width="100px" height="40px"></Button>
        </ButtonContainer>
        <Scroll direction="y" height={`calc(100% - ${SCROLL_BOTTOM_MARGIN}px)`}>
          <CarCardContainer>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </CarCardContainer>
        </Scroll> */}
      </Content>
    </>
  );
};

export default Landing;
