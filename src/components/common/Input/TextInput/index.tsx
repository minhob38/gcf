/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import { useTypedDispatch } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { ESERVICE_TYPE } from "types/enum";

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${colors.GRAY_1};
  text-align: center;
  font: ${fonts.FONT_MEDIUM_400};
  &::placeholder {
    color: ${colors.GRAY_1};
  }
`;

interface IProps {
  service?: ESERVICE_TYPE;
  name: string;
  placeholder: string;
}

const Wrapper = styled.div`
  width: 100%;
`;

const TextInput: React.FC<IProps> = ({ name, placeholder }) => {
  const dispatch = useTypedDispatch();

  const handleTextInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.textInput(ev.target));
  };

  return (
    <Wrapper>
      <Input placeholder={placeholder} type="text" name={name} onChange={handleTextInputChange} />
    </Wrapper>
  );
};

export default TextInput;
