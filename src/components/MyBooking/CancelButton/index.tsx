/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
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
  const myPickupBookingQuery = useMyPickupBookingQuery();
  const myTelcomBookingQuery = useMyTelcomBookingQuery();
  const myMoveBookingQuery = useMyMoveBookingQuery();
  const pickUpId = myPickupBookingQuery.data?.pickUpId || null;
  const telcomId = myTelcomBookingQuery.data?.telecommunicationId || null;
  const moveId = myMoveBookingQuery.data?.moveId || null;

  const pickUpMutation = usePickupCancelMutation();
  const telcomMutation = useTelocmCancelMutation();
  const moveMutation = useMoveCancelMutation();

  const handleClick = () => {
    switch (service) {
      case ESERVICE_TYPE.PICKUP:
        if (!pickUpId) throw new Error("pickUpId does not exists");
        pickUpMutation.mutate({ pickUpId });
        break;
      case ESERVICE_TYPE.TELCOM:
        if (!telcomId) throw new Error("telcomId does not exists");
        telcomMutation.mutate({ telcomId });
        break;
      case ESERVICE_TYPE.MOVE:
        if (!moveId) throw new Error("moveId does not exists");
        moveMutation.mutate({ moveId });
        break;
      default:
    }
  };

  return <Wrapper onClick={handleClick}>Cancel</Wrapper>;
};

export default CancelButton;
