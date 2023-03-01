/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import ServiceBanner from "@components/Landing/ServiceBanner";
import { ESERVICE_TYPE } from "types/enum";

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
          <ServiceBanner type={ESERVICE_TYPE.PICKUP} />
          <ServiceBanner type={ESERVICE_TYPE.TEL} />
        </ServiceContainer>
        <ServiceContainer>
          <ServiceBanner type={ESERVICE_TYPE.MOVE} />
          <ServiceBanner type={ESERVICE_TYPE.CAR} />
        </ServiceContainer>
      </Content>
    </>
  );
};

export default Landing;
