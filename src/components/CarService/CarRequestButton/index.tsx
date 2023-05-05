/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import {
  useCarBuyRequestMutation,
  useMoveMutation,
  usePickUpMutation,
  useTelcomMutation,
} from "@hooks/useApiMutation";
import { ESERVICE_TYPE } from "types/enum";
import { shallowEqual } from "react-redux";
import * as variables from "@constants/variables";
import { actions as errorActions } from "@store/slices/errorSlice";
import * as margins from "@constants/margins";
import { useParams } from "react-router-dom";
import { useCarDetailQuery } from "@hooks/useApiQuery";

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

const CarRequestButton: React.FC = () => {
  const { carBasicId } = useParams();
  const dispatch = useTypedDispatch();
  const errorMessage = useTypedSelector(
    (state) => state.rootReducer.errorReducer.carSaleErrorMessage,
  );
  const userId = useTypedSelector((state) => state.rootReducer.userReducer.userId);

  const mutation = useCarBuyRequestMutation();
  const handleClick = () => {
    if (!userId || !carBasicId) {
      dispatch(errorActions.throwCarSaleError("Enter departure and arrival"));
      return;
    }
    mutation.mutate({ userId, carBasicId: parseInt(carBasicId) });
  };

  return (
    <Wrapper>
      <ErrorText>{errorMessage}</ErrorText>
      <Button onClick={handleClick}>Request</Button>
    </Wrapper>
  );
};

export default CarRequestButton;