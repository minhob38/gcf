/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { v4 as uuid4 } from "uuid";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as variables from "@constants/variables";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { ESERVICE_TYPE } from "types/enum";

interface IProps {
  year: number;
  month: number;
  type?: ESERVICE_TYPE;
  size: { width: string; height: string };
}

const DateSelect: React.FC<IProps> = ({ year, month, type, size }) => {
  const dispatch = useTypedDispatch();
  const date = useTypedSelector((state) => state.rootReducer.pickupReducer.date);

  let dates: string[] = [variables.SELECT_DEFAULT_TEXT];

  switch (month) {
    case 2:
      // TODO: 윤달처리
      for (let i = 1; i < 29; i++) {
        dates.push(i.toString());
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      for (let i = 1; i < 32; i++) {
        dates.push(i.toString());
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      for (let i = 1; i < 31; i++) {
        dates.push(i.toString());
      }
      break;
    default:
      for (let i = 1; i < 32; i++) {
        dates.push(i.toString());
      }
      break;
  }

  const Options = dates.map((day) => {
    return (
      <option key={uuid4()} value={day}>
        {day}
      </option>
    );
  });

  const Select = styled.select`
    all: unset;
    text-align: center;
    font: ${fonts.FONT_SMALL_400};
    color: ${colors.BLACK_1};
  `;

  //   /* border: ${(props: IStyleProps) => (props.checked ? `2px solid ${colors.PRIMARY_400}` : `none`)}; */

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
        name="date"
        value={date}
        onChange={(ev) => {
          dispatch(actions.selectInput(ev.target));
        }}
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default DateSelect;
