/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import PlaceSelect from "@components/common/Select/PlaceSelect";
import { EPLACE_TYPE, ESCHEDULE_TYPE, ESERVICE_TYPE } from "types/enum";
import ScheduleSelect from "@components/common/Select/ScheduleSelect";
import TextInput from "@components/common/Input/TextInput";

const YearContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

const MonthDateContainer = styled(YearContainer)``;
const PlaceContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px 0;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* margin: 0 20px 0 0; */
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

const ArrivalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 15px 0;
  width: 100%;
`;

const MoveService = () => {
  return (
    <>
      <Header title="GCF Pick up" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Title>Schedule</Title>
        <YearContainer>
          <SelectContainer>
            <SelectTitle>Year</SelectTitle>
            <ScheduleSelect
              service={ESERVICE_TYPE.MOVE}
              type={ESCHEDULE_TYPE.YEAR}
              size={{ width: "160px", height: "30px" }}
            />
          </SelectContainer>
        </YearContainer>
        <MonthDateContainer>
          <SelectContainer>
            <SelectTitle>Month</SelectTitle>
            <ScheduleSelect
              service={ESERVICE_TYPE.MOVE}
              type={ESCHEDULE_TYPE.MONTH}
              size={{ width: "120px", height: "30px" }}
            />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Date</SelectTitle>
            <ScheduleSelect
              service={ESERVICE_TYPE.MOVE}
              type={ESCHEDULE_TYPE.DATE}
              size={{ width: "120px", height: "30px" }}
            />
          </SelectContainer>
        </MonthDateContainer>
        <Gap />
        <Title>Place</Title>
        <PlaceContainer>
          <ArrivalContainer>
            <SelectContainer>
              <SelectTitle>Departure</SelectTitle>
              <PlaceSelect type={EPLACE_TYPE.DEPARTURE} size={{ width: "160px", height: "30px" }} />
            </SelectContainer>
            <TextInput name="arrival" placeholder="Arrival Address" />
          </ArrivalContainer>
          <ArrivalContainer>
            <SelectContainer>
              <SelectTitle>Arrival</SelectTitle>
              <PlaceSelect type={EPLACE_TYPE.DEPARTURE} size={{ width: "160px", height: "30px" }} />
            </SelectContainer>
            <TextInput name="arrival" placeholder="Arrival Address" />
          </ArrivalContainer>
        </PlaceContainer>
        <RequestButton>Request</RequestButton>
      </Content>
    </>
  );
};

export default MoveService;
