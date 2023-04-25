/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { v4 as uuid4 } from "uuid";
import * as fonts from "@constants/fonts";
import * as colors from "@constants/colors";
import * as variables from "@constants/variables";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions } from "@store/slices/pickupSlice";
import { EPLACE_TYPE, ESERVICE_TYPE } from "types/enum";
import { useEffect, useState } from "react";

interface IProps {
  service?: ESERVICE_TYPE;
  type: EPLACE_TYPE;
  size: { width: string; height: string };
  // places: stirng[];
}

interface IStyleProps {
  selected: boolean;
}

/**
 * @description arrival/departure select box (item들은 인자로 전달)
 */
const PlaceSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const arrival = useTypedSelector((state) => state.rootReducer.pickupReducer.arrival);
  const departure = useTypedSelector((state) => state.rootReducer.pickupReducer.departure);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    switch (type) {
      case EPLACE_TYPE.ARRIVAL:
        if (arrival === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      case EPLACE_TYPE.DEPARTURE:
        if (departure === variables.SELECT_DEFAULT_TEXT) {
          setIsSelected(false);
          return;
        }
        setIsSelected(true);
        break;
      default:
        setIsSelected(false);
    }
  }, [type, arrival, departure]);

  const departures = [variables.SELECT_DEFAULT_TEXT, "Incheon Airport"];
  const arrivals = [variables.SELECT_DEFAULT_TEXT, "GCF"];

  let value: string;
  let name: string;
  let options: string[];

  switch (type) {
    case EPLACE_TYPE.ARRIVAL:
      value = arrival;
      name = "arrival";
      options = arrivals;
      break;
    case EPLACE_TYPE.DEPARTURE:
      value = departure;
      name = "departure";
      options = departures;
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
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default PlaceSelect;
