/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Scroll from "@components/common/Scroll";
import { useMyCarsQuery } from "@hooks/useApiQuery";
import MyBookingCancelModal from "modals/MyBookingCancelModal";
import { useTypedSelector } from "@hooks/useStore";
import MyCarCard from "@components/MyCar";
import { v4 as uuid4 } from "uuid";

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: ${margins.SIDE_MAIN_MARGIN} auto 0 auto;
  font: ${fonts.FONT_LARGE_600};
  color: ${colors.BLACK_1};
  text-align: center;
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MyCar: React.FC = () => {
  const isMyBookingCancelNotification = useTypedSelector(
    (state) => state.rootReducer.modalReducer.isMyBookingCancelNotification,
  );
  const query = useMyCarsQuery();
  const apiData = query.data || [];

  const MyCards = apiData.map((apiData) => {
    return (
      <CardContainer>
        <MyCarCard
          key={uuid4()}
          carBasicId={apiData.carBasicId}
          carImageUrl={apiData.carImageUrl}
          brandName={apiData.brandName}
          carModelName={apiData.carModelName}
          segment={apiData.segment}
          fuelType={apiData.fuelType}
          bodyType={apiData.bodyType}
          price={apiData.price}
          seatCount={apiData.seatCount}
          saleStatus={apiData.saleStatus}
          newAndUsed={apiData.newAndUsed}
        />
      </CardContainer>
    );
  });

  return (
    <>
      {isMyBookingCancelNotification && <MyBookingCancelModal />}
      <Header title="My car" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Scroll direction="y" height={`calc(100%)`}>
          <Margin />
          <SubTitle>Delivered Car</SubTitle>
          <CardContainer>{MyCards}</CardContainer>
          <SubTitle>On-process Car</SubTitle>
          <CardContainer>{MyCards}</CardContainer>
          <SubTitle>Canceled Car</SubTitle>
          <CardContainer>{MyCards}</CardContainer>
          {/* <BookingCardContainer>
            {pickupApiData ? <PickupCard /> : <EmptyCard />}
          </BookingCardContainer> */}
          {/* <SubTitle>Telecommunication</SubTitle>
          <BookingCardContainer>
            {telcomApiData ? <TelcomCard /> : <EmptyCard />}
          </BookingCardContainer>
          <SubTitle>Move</SubTitle>
          <BookingCardContainer>{moveApiData ? <MoveCard /> : <EmptyCard />}</BookingCardContainer> */}
        </Scroll>
      </Content>
    </>
  );
};

export default MyCar;
