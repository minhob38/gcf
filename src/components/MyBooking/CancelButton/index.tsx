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
import { useTypedSelector } from "@hooks/useStore";

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
  const userId = useTypedSelector((state) => state.rootReducer.authReducer.userId);
  const pickUpMutation = usePickupCancelMutation();
  const telcomMutation = useTelocmCancelMutation();
  const moveMutation = useMoveCancelMutation();

  const handleClick = () => {
    switch (service) {
      case ESERVICE_TYPE.PICKUP:
        pickUpMutation.mutate({ userId });
        break;
      case ESERVICE_TYPE.TELCOM:
        telcomMutation.mutate({ userId });
        break;
      case ESERVICE_TYPE.MOVE:
        moveMutation.mutate({ userId });
        break;
      default:
    }
  };

  return <Wrapper onClick={handleClick}>Cancel</Wrapper>;
};

export default CancelButton;
