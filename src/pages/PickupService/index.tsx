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

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 15px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
`;

const CarCardContainer = styled.div`
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

// = ButtonContainer height + margin을 줄 height

const PickupService = () => {
  return (
    <>
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <YearSelect size={{ width: "120px", height: "48px" }} />
        <MonthSelect size={{ width: "120px", height: "48px" }} />
        <DateSelect year={2023} month={2} size={{ width: "120px", height: "48px" }} />
      </Content>
    </>
  );
};

export default PickupService;
