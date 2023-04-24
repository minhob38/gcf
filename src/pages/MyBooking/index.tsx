/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import PickupCard from "@components/MyBooking/PickupCard";
import TelcomCard from "@components/MyBooking/TelcomCard";

const SubTitle = styled.div`
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
  margin: 0 0 5px 0;
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const BookingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 auto;
`;

const MyBooking: React.FC = () => {
  return (
    <>
      <Header title="My booking" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <BookingCardContainer>
          <PickupCard />
        </BookingCardContainer>
        <BookingCardContainer>
          <TelcomCard />
        </BookingCardContainer>
      </Content>
    </>
  );
};

export default MyBooking;
