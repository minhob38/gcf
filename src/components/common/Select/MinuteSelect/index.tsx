/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { v4 as uuid4 } from "uuid";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as variables from "@constants/variables";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { ESERVICE_TYPE } from "types/enum";

interface IProps {
  type?: ESERVICE_TYPE;
  size: { width: string; height: string };
}

const MinuteSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const minute = useTypedSelector((state) => state.rootReducer.pickupReducer.minute);

  const minutes = [variables.SELECT_DEFAULT_TEXT];

  for (let i = 0; i < 6; i++) {
    minutes.push((10 * i).toString());
  }

  const Options = minutes.map((minute) => {
    return (
      <option key={uuid4()} value={minute}>
        {minute}
      </option>
    );
  });

  const Select = styled.select`
    all: unset;
    text-align: center;
    font: ${fonts.FONT_SMALL_400};
    color: ${colors.BLACK_1};
  `;

  const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size.width};
    height: ${size.height};
    border-radius: 8px;
    background: ${colors.WHITE_1};
  `;

  return (
    <Wrapper>
      <Select
        name="minute"
        value={minute}
        onChange={(ev) => {
          dispatch(actions.selectInput(ev.target));
        }}
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default MinuteSelect;
