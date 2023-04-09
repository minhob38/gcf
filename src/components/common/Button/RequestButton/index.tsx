/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import { pickUpRequestApi, testPostApi } from "@apis/functions";
import { useTypedSelector } from "@hooks/useStore";
import { useApiMutation } from "@hooks/useApiMutation";
import { IPickupRequest } from "types/types";

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

const RequestButton = () => {
  const pickupState = useTypedSelector((state) => state.rootReducer.pickupReducer);
  const pickupMutation = useApiMutation<IPickupRequest>(pickUpRequestApi);

  const handleClick = () => {
    pickupMutation.mutate(pickupState);
  };

  return (
    <>
      <Button onClick={handleClick}>Request</Button>
    </>
  );
};

export default RequestButton;
