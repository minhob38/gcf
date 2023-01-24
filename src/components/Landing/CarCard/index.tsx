/** @jsxImportSource @emotion/react */
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
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
`;

const Info = styled.div``;

const CarName = styled.div``;
const CarChip = styled.div``;

const CarCard: React.FC = () => {
  return (
    <Wrapper>
      <Image
        src="https://user-images.githubusercontent.com/57255024/214351958-1ef60011-d940-4680-a38e-5c7c664f4e18.png"
        alt="car"
        width="200px"
        height="150px"
      />
      <Info>
        <CarName>Kia Sorento</CarName>
        <CarChip></CarChip>
      </Info>
    </Wrapper>
  );
};

export default CarCard;
