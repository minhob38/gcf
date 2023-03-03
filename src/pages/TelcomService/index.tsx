/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import PlaceSelect from "@components/common/Select/PlaceSelect";
import { EPLACE_TYPE, ESCHEDULE_TYPE } from "types/enum";
import ScheduleSelect from "@components/common/Select/ScheduleSelect";
import TextInput from "@components/common/Select/TextInput";

// = ButtonContainer height + margin을 줄 height

const YearMonthContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

const MonthDateContainer = styled(YearMonthContainer)``;
const HourMinuteContainer = styled(YearMonthContainer)``;
const PlaceContainer = styled(YearMonthContainer)``;
const FlightContainer = styled(YearMonthContainer)``;

const SelectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
`;

const SelectTitle = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.BLACK_1};
`;

const Title = styled.div`
  margin: ${margins.TOP_MARGIN} 0 5px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.FONT_LARGE_600};
  color: ${colors.BLACK_1};
`;

const RequestButton = styled.div`
  position: fixed;
  bottom: ${margins.SIDE_MAIN_MARGIN};
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 50px;

  /* margin: 0 auto 44px auto; */
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const Gap = styled.div`
  height: 20px;
`;

const TelcomService = () => {
  return (
    <>
      <Header title="GCF Telcom" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Title>Schedule</Title>
        <YearMonthContainer>
          <SelectContainer>
            <SelectTitle>Year</SelectTitle>
            <ScheduleSelect type={ESCHEDULE_TYPE.YEAR} size={{ width: "160px", height: "30px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Month</SelectTitle>
            <ScheduleSelect type={ESCHEDULE_TYPE.MONTH} size={{ width: "120px", height: "30px" }} />
          </SelectContainer>
        </YearMonthContainer>
        <Gap />
        <Title>Kind</Title>
        <PlaceContainer>
          <SelectContainer>
            <SelectTitle>Departure</SelectTitle>
            <PlaceSelect type={EPLACE_TYPE.DEPARTURE} size={{ width: "160px", height: "30px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Arrival</SelectTitle>
            <PlaceSelect type={EPLACE_TYPE.ARRIVAL} size={{ width: "160px", height: "30px" }} />
          </SelectContainer>
        </PlaceContainer>
        <RequestButton>Request</RequestButton>
      </Content>
    </>
  );
};

export default TelcomService;
