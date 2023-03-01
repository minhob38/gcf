/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import { v4 as uuid4 } from "uuid";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import DateSelect from "@components/common/Select/DateSelect";
import YearSelect from "@components/common/Select/YearSelect";
import MonthSelect from "@components/common/Select/MonthSelect";
import HourSelect from "@components/common/Select/HourSelect";
import MinuteSelect from "@components/common/Select/MinuteSelect";

// = ButtonContainer height + margin을 줄 height

const YearContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

const MonthDateContainer = styled(YearContainer)``;
const HourMinuteContainer = styled(YearContainer)``;

const SelectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 0;
`;
// margin: ${margins.TOP_MARGIN} auto 0 auto;

const Title = styled.div`
  margin: ${margins.TOP_MARGIN} 0 10px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.FONT_BIG_400};
  color: ${colors.BLACK_1};
`;

const SelectTitle = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
`;

const PickupService = () => {
  return (
    <>
      <Header title="GCF Pick up" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Title>Schedule</Title>
        <YearContainer>
          <SelectContainer>
            <SelectTitle>Year</SelectTitle>
            <YearSelect size={{ width: "160px", height: "48px" }} />
          </SelectContainer>
        </YearContainer>
        <MonthDateContainer>
          <SelectContainer>
            <SelectTitle>Month</SelectTitle>
            <MonthSelect size={{ width: "120px", height: "48px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Date</SelectTitle>
            <DateSelect year={2023} month={2} size={{ width: "120px", height: "48px" }} />
          </SelectContainer>
        </MonthDateContainer>
        <HourMinuteContainer>
          <SelectContainer>
            <SelectTitle>Hour</SelectTitle>
            <HourSelect size={{ width: "120px", height: "48px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Minute</SelectTitle>
            <MinuteSelect size={{ width: "120px", height: "48px" }} />
          </SelectContainer>
        </HourMinuteContainer>
        <Title>Place</Title>
        <Title>Flight</Title>
      </Content>
    </>
  );
};

export default PickupService;
