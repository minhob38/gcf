/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { usePickUpMutation } from "@hooks/useApiMutation";
import { ESERVICE_TYPE } from "types/enum";
import { shallowEqual } from "react-redux";
import * as variables from "@constants/variables";
import { actions as errorActions } from "@store/slices/errorSlice";
import * as margins from "@constants/margins";

interface IProps {
  service: ESERVICE_TYPE;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: fl;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 100px;
  margin: 0 auto;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.ERROR_RED};
  text-align: center;
`;

const RequestButton: React.FC<IProps> = ({ service }) => {
  const pickupState = useTypedSelector((state) => state.rootReducer.pickupReducer, shallowEqual);
  const pickUpErrorMessage = useTypedSelector(
    (state) => state.rootReducer.errorReducer.pickUpErrorMessage,
  );
  const dispatch = useTypedDispatch();
  const pickUpMutation = usePickUpMutation();

  const handleClick = () => {
    switch (service) {
      case ESERVICE_TYPE.PICKUP:
        const { year, month, date, hour, minute, departure, arrival, flightNumber } = pickupState;

        if (
          year === variables.SELECT_YEAR_DEFAULT_TEXT ||
          month === variables.SELECT_MONTH_DEFAULT_TEXT ||
          date === variables.SELECT_DATE_DEFAULT_TEXT
        ) {
          dispatch(errorActions.throwPickUpError("Enter year, month and date"));
          return;
        }

        if (
          hour === variables.SELECT_HOUR_DEFAULT_TEXT ||
          minute === variables.SELECT_MINUTE_DEFAULT_TEXT
        ) {
          dispatch(errorActions.throwPickUpError("Enter hour and minute"));
          return;
        }

        if (
          departure === variables.SELECT_DEFAULT_TEXT ||
          arrival === variables.SELECT_DEFAULT_TEXT
          // flightNumber === variables.SELECT_DEFAULT_TEXT
        ) {
          dispatch(errorActions.throwPickUpError("Enter departure and arrival"));
          return;
        }

        pickUpMutation.mutate({
          year,
          month,
          date,
          hour,
          minute,
          departure,
          arrival,
          flightNumber,
        });
        return;
      case ESERVICE_TYPE.TELCOM:
        // telcomMutate(pickupState);
        return;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <ErrorText>{pickUpErrorMessage}</ErrorText>
      <Button onClick={handleClick}>Request</Button>
    </Wrapper>
  );
};

export default RequestButton;
