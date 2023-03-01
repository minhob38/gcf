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
  type?: ESERVICE_TYPE;
  size: { width: string; height: string };
}

const YearSelect: React.FC<IProps> = ({ type, size }) => {
  const dispatch = useTypedDispatch();
  const year = useTypedSelector((state) => state.rootReducer.pickupReducer.year);

  const years = [
    variables.SELECT_DEFAULT_TEXT,
    new Date().getFullYear().toString(),
    (new Date().getFullYear() + 1).toString(),
  ];

  const Options = years.map((year) => {
    return (
      <option key={uuid4()} value={year}>
        {year}
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
        name="year"
        value={year}
        onChange={(ev) => {
          dispatch(actions.selectInput(ev.target));
        }}
      >
        {Options}
      </Select>
    </Wrapper>
  );
};

export default YearSelect;
