/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { useRouter } from 'next/router';
import * as size from "@constants/size";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import * as margins from "@constants/margins";

// import Image from '@components/common/Image';
// import * as colors from '@constants/colors';
// import * as fonts from '@constants/fonts';
// import backImage from '@assets/images/icons/back.svg';
// import closeImage from '@assets/images/icons/close.svg';
// import { HEADER_HEIGHT } from '@constants/size';

interface IProps {
  title: string;
  // type: 'back' | 'close';
  // backPath?: string;
  // closePath?: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${size.HEADER_HEIGHT};
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
  box-shadow: ${colors.SHADOW};
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.TITLE_T1};
  color: ${colors.PRIMARY_1};
`;

const LoginText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.PRIMARY_1};
`;

// const ImageContainer = styled.div``;

// const Header : React.FC<IProps>= ({title}) => {
//   return <div>{title}</div>

// }

const Header: React.FC<IProps> = ({
  title,
  // type,
  // backPath = '/',
  // closePath = '/',
}) => {
  // const router = useRouter();
  // let src: any;
  // let alt: 'back' | 'close';
  // let path: string;
  // if (type === 'back') {
  //   src = backImage;
  //   alt = 'back';
  //   path = backPath;
  // } else {
  //   src = closeImage;
  //   alt = 'close';
  //   path = closePath;
  // }
  // const handleClick = () => {
  //   if (!path) return;
  //   router.push(path);
  // };
  return (
    <Wrapper>
      {/* <ImageContainer onClick={handleClick}>
        <Image src={src} alt={alt} width="24px" height="24px" />
      </ImageContainer> */}
      <Title>{title}</Title>
      <LoginText>Login</LoginText>
    </Wrapper>
  );
};

export default Header;
