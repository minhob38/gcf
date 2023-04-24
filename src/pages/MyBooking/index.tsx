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
import MoveCard from "@components/MyBooking/MoveCard";
import Scroll from "@components/common/Scroll";

const SubTitle = styled.div`
  font: ${fonts.FONT_LARGE_600};
  color: ${colors.BLACK_1};
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const BookingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px auto;
  width: 100%;
`;

const MyBooking: React.FC = () => {
  return (
    <>
      <Header title="My booking" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Scroll direction="y" height={`calc(100%)`}>
          <Margin />
          <SubTitle>Pick up</SubTitle>
          <BookingCardContainer>
            <PickupCard />
          </BookingCardContainer>
          <SubTitle>Telecommunication</SubTitle>
          <BookingCardContainer>
            <TelcomCard />
          </BookingCardContainer>
          <SubTitle>Move</SubTitle>
          <BookingCardContainer>
            <MoveCard />
          </BookingCardContainer>
        </Scroll>
      </Content>
    </>
  );
};

export default MyBooking;
