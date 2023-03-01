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
import { ESCHEDULE_TYPE, ESERVICE_TYPE } from "types/enum";

interface IProps {
  type: ESCHEDULE_TYPE;
  size: { width: string; height: string };
}

const ScheduleSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const year = useTypedSelector((state) => state.rootReducer.pickupReducer.year);
  const month = useTypedSelector((state) => state.rootReducer.pickupReducer.month);
  const date = useTypedSelector((state) => state.rootReducer.pickupReducer.date);
  const hour = useTypedSelector((state) => state.rootReducer.pickupReducer.hour);
  const minute = useTypedSelector((state) => state.rootReducer.pickupReducer.minute);

  const months = [variables.SELECT_DEFAULT_TEXT];
  const dates = [variables.SELECT_DEFAULT_TEXT];
  const hours = [variables.SELECT_DEFAULT_TEXT];
  const minutes = [variables.SELECT_DEFAULT_TEXT];
  const years = [
    variables.SELECT_DEFAULT_TEXT,
    new Date().getFullYear().toString(),
    (new Date().getFullYear() + 1).toString(),
  ];

  let value: string;
  let name: string;
  let options: string[];

  switch (type) {
    case ESCHEDULE_TYPE.YEAR:
      value = year;
      name = "year";
      options = years;
      break;
    case ESCHEDULE_TYPE.MONTH:
      value = month;
      name = "month";
      for (let i = 1; i < 13; i++) {
        months.push(i.toString());
      }
      options = months;
      break;
    case ESCHEDULE_TYPE.HOUR:
      value = hour;
      name = "hours";
      for (let i = 0; i < 24; i++) {
        const hour = i.toString();
        const twoDigit = hour.length === 1 ? "0" + hour : hour;
        hours.push(twoDigit);
      }
      options = hours;
      break;
    case ESCHEDULE_TYPE.MINUTE:
      value = minute;
      name = "minute";
      for (let i = 0; i < 6; i++) {
        minutes.push((10 * i).toString());
      }
      options = minutes;
      break;
    default:
      value = "";
      name = "";
      options = [];
  }

  const Options = options.map((option) => {
    return (
      <option key={uuid4()} value={option}>
        {option}
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
        name={name}
        value={value}
        onChange={(ev) => {
          dispatch(actions.selectInput(ev.target));
        }}
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default ScheduleSelect;
