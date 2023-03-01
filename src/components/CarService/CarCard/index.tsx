/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";

import Image from "@components/common/Image";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: start;
  margin: 0 0 10px 0;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  width: 40%;
`;

const CarName = styled.div`
  margin: 0 0 10px 0;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.BLACK_1};
`;

const CarChipContainer = styled.div``;

const CarChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font: ${fonts.FONT_TINY_400};
  color: ${colors.BLACK_1};
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
        width="55%"
      />
      <div
        css={css`
          margin: 0 0 0 5%;
        `}
      />
      <Info>
        <CarName>Kia Sorento</CarName>
        {/* <CarChip> */}
        <CarChipContainer>
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
            />
            <CarChip>Seat 7</CarChip>
          </div>
          <CarChip>$10K ~ 20K</CarChip>
        </CarChipContainer>
      </Info>
    </Wrapper>
  );
};

export default CarCard;
