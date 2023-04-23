/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { pickUpRequestApi, telcomRequestApi } from "@apis/functions";
import { useTypedSelector } from "@hooks/useStore";
import { useApiMutation, usePickUpMutation } from "@hooks/useApiMutation";
import { IPickupRequest } from "types/types";
import { ESERVICE_TYPE } from "types/enum";

interface IProps {
  service: ESERVICE_TYPE;
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_1};
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.WHITE_1};
`;

const RequestButton: React.FC<IProps> = ({ service }) => {
  const pickupState = useTypedSelector((state) => state.rootReducer.pickupReducer);
  const { mutate: pickupMutate } = useApiMutation<IPickupRequest>(pickUpRequestApi);
  const { mutate: telcomMutate } = useApiMutation<IPickupRequest>(telcomRequestApi);
  const pickUpMutation = usePickUpMutation();

  const handleClick = () => {
    switch (service) {
      case ESERVICE_TYPE.PICKUP:
        pickUpMutation.mutate("...");
        return;
      case ESERVICE_TYPE.TELCOM:
        telcomMutate(pickupState);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Button onClick={handleClick}>Request</Button>
    </>
  );
};

export default RequestButton;
