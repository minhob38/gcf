/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { v4 as uuid4 } from "uuid";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as variables from "@constants/variables";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { ESCHEDULE_TYPE, ESERVICE_TYPE } from "types/enum";
import { useEffect, useState } from "react";

interface IProps {
  service?: ESERVICE_TYPE;
  type: ESCHEDULE_TYPE;
  size: { width: string; height: string };
}

interface IStyleProps {
  selected: boolean;
}

const ScheduleSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const year = useTypedSelector((state) => state.rootReducer.pickupReducer.year);
  const month = useTypedSelector((state) => state.rootReducer.pickupReducer.month);
  const date = useTypedSelector((state) => state.rootReducer.pickupReducer.date);
  const hour = useTypedSelector((state) => state.rootReducer.pickupReducer.hour);
  const minute = useTypedSelector((state) => state.rootReducer.pickupReducer.minute);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    switch (type) {
      case ESCHEDULE_TYPE.YEAR:
        if (year === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      case ESCHEDULE_TYPE.MONTH:
        if (month === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }

        setIsSelected(true);
        break;
      case ESCHEDULE_TYPE.DATE:
        if (date === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      case ESCHEDULE_TYPE.HOUR:
        if (hour === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      case ESCHEDULE_TYPE.MINUTE:
        if (minute === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      default:
        setIsSelected(false);
    }
  }, [type, year, month, date, hour, minute]);

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
    case ESCHEDULE_TYPE.DATE:
      value = date;
      name = "date";
      switch (month) {
        case "2":
          // TODO: ????????????
          for (let i = 1; i < 29; i++) {
            dates.push(i.toString());
          }
          break;
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
          for (let i = 1; i < 32; i++) {
            dates.push(i.toString());
          }
          break;
        case "4":
        case "6":
        case "9":
        case "11":
          for (let i = 1; i < 31; i++) {
            dates.push(i.toString());
          }
          break;
        default:
          // for (let i = 1; i < 32; i++) {
          //   dates.push(i.toString());
          // }
          break;
      }

      options = dates;
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
    border: ${(props: IStyleProps) => (props.selected ? `2px solid ${colors.PRIMARY_3}` : `none`)};
    text-align: center;
    font: ${fonts.FONT_SMALL_400};
    color: ${(props: IStyleProps) => (props.selected ? `${colors.BLACK_1}` : `${colors.GRAY_1}`)};
  `;

  return (
    <Wrapper selected={isSelected}>
      <Select
        name={name}
        value={value}
        onChange={(ev) => {
          dispatch(actions.selectInput(ev.target));
        }}
        onClick={(ev) => {
          switch (type) {
            case ESCHEDULE_TYPE.DATE:
              if (
                year === variables.SELECT_DEFAULT_TEXT ||
                month === variables.SELECT_DEFAULT_TEXT
              ) {
                // modal??? ?????????
                alert("select year and month first");
              }

              break;
            default:
          }
        }}
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default ScheduleSelect;
