/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import * as margins from "@constants/margins";
import { useTypedDispatch } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { ESERVICE_TYPE } from "types/enum";

interface IProps {
  name: string;
  title: string;
}

const Label = styled.label`
  display: flex;
  align-items: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto;
`;

const Input = styled.input`
  all: unset;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.GRAY_1};
  background-color: ${colors.WHITE_1};
  border: 2px solid ${colors.GRAY_1};
  border-radius: 8px;
`;
// border: ${(props: IStyleProps) => (props.selected ? `2px solid ${colors.PRIMARY_3}` : `none`)};

const CheckboxInput: React.FC<IProps> = ({ name, title }) => {
  const dispatch = useTypedDispatch();

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };

  return (
    <Label>
      <Text>{title}</Text>
      <Input
        type="checkbox"
        name={name}
        // checked={checkStatus === "sign-in" ? true : false}
        // onChange={handleCheckBoxChange}
      />
    </Label>
  );
};

export default CheckboxInput;
