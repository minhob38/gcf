/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { ESCHEDULE_TYPE, ESERVICE_TYPE, ETELCOM_KIND_TYPE } from "types/enum";
import ScheduleSelect from "@components/common/Select/ScheduleSelect";
import CheckboxInput from "@components/common/Input/CheckboxInput";
import RequestButton from "@components/common/Button/RequestButton";
import PickupTelcomMoveNotificationModal from "modals/PickupTelcomMoveNotificationModal";
import { actions as errorActions } from "@store/slices/errorSlice";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { useMyTelcomBookingQuery } from "@hooks/useApiQuery";

// = ButtonContainer height + margin을 줄 height

const YearMonthContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 10px auto;
`;

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

const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px 0;
`;

const Gap = styled.div`
  height: 20px;
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

const TelcomService = () => {
  const dispatch = useTypedDispatch();
  const isPickupTelcomMoveNotification = useTypedSelector(
    (state) => state.rootReducer.modalReducer.isPickupTelcomMoveNotification,
  );
  const query = useMyTelcomBookingQuery();
  const apiData = query.data;

  const handleFocus = () => dispatch(errorActions.catchPickUpTelcomMoveError());

  return (
    <>
      {apiData && (
        <PickupTelcomMoveNotificationModal
          notification="You have a booking in progress"
          buttonText="Go to my booking"
          path="/my-booking"
        />
      )}
      {isPickupTelcomMoveNotification && (
        <PickupTelcomMoveNotificationModal
          notification="Request success"
          buttonText="Go to home"
          path="/"
        />
      )}
      <Header title="Telcom" mode="back"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Title>Schedule</Title>
        <YearMonthContainer>
          <SelectContainer onFocus={handleFocus}>
            <SelectTitle>Year</SelectTitle>
            <ScheduleSelect
              service={ESERVICE_TYPE.TELCOM}
              type={ESCHEDULE_TYPE.YEAR}
              size={{ width: "160px", height: "30px" }}
            />
          </SelectContainer>
          <SelectContainer onFocus={handleFocus}>
            <SelectTitle>Month</SelectTitle>
            <ScheduleSelect
              service={ESERVICE_TYPE.TELCOM}
              type={ESCHEDULE_TYPE.MONTH}
              size={{ width: "120px", height: "30px" }}
            />
          </SelectContainer>
        </YearMonthContainer>
        <Gap />
        <Title>Kind</Title>
        <CheckboxContainer onFocus={handleFocus}>
          <CheckboxInput name="kind" value={ETELCOM_KIND_TYPE.MOBILE} title="Mobile Phone" />
          <CheckboxInput name="kind" value={ETELCOM_KIND_TYPE.INTERNET} title="Internet[LAN]" />
          <CheckboxInput name="kind" value={ETELCOM_KIND_TYPE.TV} title="Television" />
        </CheckboxContainer>
        <RequestButtonContainer>
          <RequestButton service={ESERVICE_TYPE.TELCOM} />
        </RequestButtonContainer>
      </Content>
    </>
  );
};

export default TelcomService;
