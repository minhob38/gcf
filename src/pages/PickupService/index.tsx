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

// = ButtonContainer height + margin을 줄 height

const YearMonthDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: ${margins.TOP_MARGIN} auto 0 auto;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <YearMonthDateContainer>
          <SelectContainer>
            <SelectTitle>Year</SelectTitle>
            <YearSelect size={{ width: "120px", height: "48px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Month</SelectTitle>
            <MonthSelect size={{ width: "80px", height: "48px" }} />
          </SelectContainer>
          <SelectContainer>
            <SelectTitle>Date</SelectTitle>
            <DateSelect year={2023} month={2} size={{ width: "80px", height: "48px" }} />
          </SelectContainer>
        </YearMonthDateContainer>
      </Content>
    </>
  );
};

export default PickupService;
