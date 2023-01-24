/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";

import Image from "@components/common/Image";

interface IProps extends IStyleProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IStyleProps {
  width: string;
  height: string;
}

// const Wrapper = styled.button`
//   all: unset;
//   display: block;
//   background-color: ${colors.WHITE_1};
//   width: ${(props: IStyleProps) => props.width};
//   height: ${(props: IStyleProps) => props.height};
//   border: 2px solid ${colors.PRIMARY_3};
//   border-radius: 8px;
//   font: ${fonts.BUTTON_2};
//   color: ${colors.BLACK_1};
//   text-align: center;
//   /* &:hover {
//     background-color: #ebc7c7;
//     border: none;
//   } */
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  margin: 0 0 0 10px;
`;

const CarName = styled.div``;
// const CarChip = styled.div``;

const CarChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_400};
  background-color: ${colors.PRIMARY_3};
  padding: 5.5px 12px;
  border-radius: 4px;
`;

const CarCard: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="https://user-images.githubusercontent.com/57255024/214351958-1ef60011-d940-4680-a38e-5c7c664f4e18.png"
        alt="car"
        width="60%"
        // height="130px"
      />
      <Info>
        <CarName>Kia Sorento</CarName>
        {/* <CarChip> */}
        <div
          css={css`
            display: flex;
            flex-flow: row nowrap;
            margin: 0 0 5px 0;
            /* width: fit-content; */
          `}
        >
          <CarChip>Hatch</CarChip>
          <div
            css={css`
              width: 5px;
            `}
          ></div>
          <CarChip>Seat 7</CarChip>
        </div>
        <CarChip>$10K ~ 20K</CarChip>

        {/* </CarChip> */}
      </Info>
    </Wrapper>
  );
};

export default CarCard;
