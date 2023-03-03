/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import Image from "@components/common/Image";
import { Link } from "react-router-dom";
import { ESERVICE_TYPE } from "types/enum";
import pickUpImage from "@assets/images/pickup-service.jpg";
import teleImage from "@assets/images/tele-service.png";
import moveImage from "@assets/images/move-service.png";
import carImage from "@assets/images/car-service.png";

interface IProps {
  type: ESERVICE_TYPE;
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
  &:hover {
  }
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  font: ${fonts.FONT_LARGE_400};
  color: ${colors.BLACK_1};
`;

const ServiceBanner: React.FC<IProps> = ({ type }) => {
  let title: string;
  let src: any;
  let alt: string;
  let path: string;

  switch (type) {
    case ESERVICE_TYPE.PICKUP:
      title = "Pick Up";
      src = pickUpImage;
      alt = "pickup";
      path = "/pickup";
      break;
    case ESERVICE_TYPE.MOVE:
      title = "Move";
      src = moveImage;
      alt = "move";
      path = "/move";
      break;
    case ESERVICE_TYPE.TELCOM:
      title = "Telcom";
      src = teleImage;
      alt = "telcom";
      path = "/telcom";
      break;
    case ESERVICE_TYPE.CAR:
      title = "My Car";
      src = carImage;
      alt = "car";
      path = "/car";
      break;
    default:
      title = "My Car";
      src = carImage;
      alt = "car";
      path = "/car";
  }

  path = window.location.hostname === "minhob38.github.io" ? `/gcf${path}` : path;

  return (
    <Wrapper>
      <Link to={path}>
        <Image src={src} alt={alt} width="100%" />
        <Title>{title}</Title>
      </Link>
    </Wrapper>
  );
};

export default ServiceBanner;
