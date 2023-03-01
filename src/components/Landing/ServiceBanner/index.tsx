/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import Image from "@components/common/Image";

interface IProps {
  title: string;
  image: { src: any; alt: string };
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// interface IStyleProps {
//   width: string;
//   height: string;
// }

const GAP = "10px";

// const Wrapper = styled.div`
//   width: ${`calc(100% - ${GAP}/2)`};
//   /* all: unset;
//   display: block;
//   background-color: ${colors.WHITE_1};
//   width: ${(props: IStyleProps) => props.width};
//   height: ${(props: IStyleProps) => props.height};
//   border: 2px solid ${colors.PRIMARY_3};
//   border-radius: 8px;
//   font: ${fonts.FONT_MEDIUM_600};
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
  flex-flow: column nowrap;
  width: ${`calc(50% - ${GAP}/2)`};
  box-shadow: 0 5px 10px -10px ${colors.GRAY_1}; // 아래에만 그림자 넣기
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
`;

const ServiceBanner: React.FC<IProps> = ({ title, image }) => {
  const { src, alt } = image;

  return (
    <Wrapper>
      <Image src={src} alt={alt} width="100%" />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ServiceBanner;
