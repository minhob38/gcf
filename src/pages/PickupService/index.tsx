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
import Scroll from "@components/common/Scroll";
import RequestButton from "@components/common/Button/RequestButton";
import { useQuery } from "react-query";
import { testGetApi } from "@apis/functions";

const YearContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

const MonthDateContainer = styled(YearContainer)``;
const HourMinuteContainer = styled(YearContainer)``;
const PlaceContainer = styled(YearContainer)``;
const FlightContainer = styled(YearContainer)``;

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

const RequestButtonContainer = styled.div`
  position: fixed;
  bottom: ${margins.SIDE_MAIN_MARGIN};
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
`;

const Gap = styled.div`
  height: 20px;
`;

// = button 영역 + margin을 줄 height
// prettier-ignore
const SCROLL_BOTTOM_MARGIN = (50 + 20) + 20 + 20;

const PickupService = () => {
  const testOption = {
    refetchOnWindowFocus: false,
    retry: 0,
    suspense: true,
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (e) => {
      console.log("error", e.message);
    },
  };
  const query = useQuery("testQuery", testGetApi, testOption);
  const { isLoading, isError, data, error } = query;

  return (
    <>
      <Header title="GCF Pick up" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Scroll direction="y" height={`calc(100% - ${SCROLL_BOTTOM_MARGIN}px)`}>
          <Title>Schedule</Title>
          <YearContainer>
            <SelectContainer>
              <SelectTitle>Year</SelectTitle>
              <ScheduleSelect
                service={ESERVICE_TYPE.PICKUP}
                type={ESCHEDULE_TYPE.YEAR}
                size={{ width: "160px", height: "30px" }}
              />
            </SelectContainer>
          </YearContainer>
          <MonthDateContainer>
            <SelectContainer>
              <SelectTitle>Month</SelectTitle>
              <ScheduleSelect
                service={ESERVICE_TYPE.PICKUP}
                type={ESCHEDULE_TYPE.MONTH}
                size={{ width: "120px", height: "30px" }}
              />
            </SelectContainer>
            <SelectContainer>
              <SelectTitle>Date</SelectTitle>
              <ScheduleSelect
                service={ESERVICE_TYPE.PICKUP}
                type={ESCHEDULE_TYPE.DATE}
                size={{ width: "120px", height: "30px" }}
              />
            </SelectContainer>
          </MonthDateContainer>
          <HourMinuteContainer>
            <SelectContainer>
              <SelectTitle>Hour</SelectTitle>
              <ScheduleSelect
                service={ESERVICE_TYPE.PICKUP}
                type={ESCHEDULE_TYPE.HOUR}
                size={{ width: "120px", height: "30px" }}
              />
            </SelectContainer>
            <SelectContainer>
              <SelectTitle>Minute</SelectTitle>
              <ScheduleSelect
                service={ESERVICE_TYPE.PICKUP}
                type={ESCHEDULE_TYPE.MINUTE}
                size={{ width: "120px", height: "30px" }}
              />
            </SelectContainer>
          </HourMinuteContainer>
          <Gap />
          <Title>Place</Title>
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
          <Gap />
          <Title>Flight</Title>
          <FlightContainer>
            <TextInput name="flightNumber" placeholder="Flight Number" />
          </FlightContainer>
        </Scroll>
        <RequestButtonContainer>
          <RequestButton service={ESERVICE_TYPE.PICKUP} />
        </RequestButtonContainer>
      </Content>
    </>
  );
};

export default PickupService;
