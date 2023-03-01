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
import { EPLACE_TYPE } from "types/enum";

interface IProps {
  type: EPLACE_TYPE;
  size: { width: string; height: string };
}

const PlaceSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const arrival = useTypedSelector((state) => state.rootReducer.pickupReducer.arrival);
  const departure = useTypedSelector((state) => state.rootReducer.pickupReducer.departure);

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

export default PlaceSelect;
