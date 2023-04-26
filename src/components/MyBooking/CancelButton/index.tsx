/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { actions as modalActions } from "@store/slices/modalSlice";
import { ESERVICE_TYPE } from "types/enum";
import {
  useMoveCancelMutation,
  usePickupCancelMutation,
  useTelocmCancelMutation,
} from "@hooks/useApiMutation";
import {
  useMyMoveBookingQuery,
  useMyPickupBookingQuery,
  useMyTelcomBookingQuery,
} from "@hooks/useApiQuery";
import { useQueryClient } from "react-query";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { EQUERY_KEY } from "@constants/query-key";

interface IProps {
  service: ESERVICE_TYPE;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid ${colors.ERROR_RED};
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.ERROR_RED};
`;

const CancelButton: React.FC<IProps> = ({ service }) => {
  const dispatch = useTypedDispatch();
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const queryClient = useQueryClient();
  const myPickupBookingQuery = useMyPickupBookingQuery();
  const myTelcomBookingQuery = useMyTelcomBookingQuery();
  const myMoveBookingQuery = useMyMoveBookingQuery();
  const pickUpId = myPickupBookingQuery.data?.pickUpId || null;
  const telcomId = myTelcomBookingQuery.data?.telecommunicationId || null;
  const moveId = myMoveBookingQuery.data?.moveId || null;

  const pickUpMutation = usePickupCancelMutation();
  const telcomMutation = useTelocmCancelMutation();
  const moveMutation = useMoveCancelMutation();

  const handleClick = async () => {
    dispatch(modalActions.showMyBookingCancelNotification(service));
  };

  return <Wrapper onClick={handleClick}>Cancel</Wrapper>;
};

export default CancelButton;
