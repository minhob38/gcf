/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import Button from "@components/CarService/Button";
import Scroll from "@components/common/Scroll";
import { v4 as uuid4 } from "uuid";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";

import CarCard from "@components/CarService/CarCard";
import DaySelect from "@components/common/Select/DaySelect";

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
  // const days = ["1", "2", ""];
  // const days = new Array()
  // const DayOptions = days.map((day) => {
  //   return (
  //     <option key={uuid4()} value={day}>
  //       {day}
  //     </option>
  //   );
  // });

  return (
    <>
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <DaySelect year={2023} month={2} />
      </Content>
    </>
  );
};

export default PickupService;
