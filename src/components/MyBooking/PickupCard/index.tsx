/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as margins from "@constants/margins";
import * as size from "@constants/size";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions as authActions } from "@store/slices/authSlice";
import { actions as errorActions } from "@store/slices/errorSlice";
import { useLoginMutation } from "@hooks/useApiMutation";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "@components/Auth/TextInput";
import SignButton from "@components/Auth/SignButton";
import ErrorText from "@components/Auth/ErrorText";
import LoadingModal from "modals/SpinnerLoadingModal";
import { checkIsEmailFormat } from "@utils/common";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto 20px auto;
  padding: 15px;
  border-radius: 8px;
  background-color: ${colors.WHITE_1};
  box-shadow: ${colors.SHADOW};
`;

const TimeSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const PlaceSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const BulletText = styled.div`
  width: 50px;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const PlainText = styled.div`
  font: ${fonts.FONT_MEDIUM_400};
  color: ${colors.BLACK_1};
`;

const PickupCard: React.FC = () => {
  return (
    <Wrapper>
      <TimeSchedule>
        <BulletText>Time</BulletText>
        <PlainText>2023/01/31 17:30</PlainText>
      </TimeSchedule>
      <PlaceSchedule>
        <BulletText>From</BulletText>
        <PlainText>Incheon Airport</PlainText>
      </PlaceSchedule>
      <PlaceSchedule>
        <BulletText>To</BulletText>
        <PlainText>GCF</PlainText>
      </PlaceSchedule>
    </Wrapper>
  );
};

export default PickupCard;
