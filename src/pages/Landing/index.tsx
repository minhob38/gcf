/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import pickUpImage from "@assets/images/pickup-service.jpg";
import teleImage from "@assets/images/tele-service.png";
import moveImage from "@assets/images/move-service.png";
import carImage from "@assets/images/car-service.png";
import ServiceBanner from "@components/Landing/ServiceBanner";

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
`;

const Margin = styled.div`
  height: 20px;
`;

const Landing = () => {
  return (
    <>
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <ServiceContainer>
          <ServiceBanner title="Pick Up" image={{ src: pickUpImage, alt: "pickup" }} />
          <ServiceBanner title="Tele" image={{ src: teleImage, alt: "tele" }} />
        </ServiceContainer>
        <ServiceContainer>
          <ServiceBanner title="Move" image={{ src: moveImage, alt: "move" }} />
          <ServiceBanner title="My Car" image={{ src: carImage, alt: "car" }} />
        </ServiceContainer>
      </Content>
    </>
  );
};

export default Landing;
