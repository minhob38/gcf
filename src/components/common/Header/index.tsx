/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as size from "@constants/size";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import * as margins from "@constants/margins";

import { Link } from "react-router-dom";

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
  background-color: ${colors.WHITE_1};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.TITLE_T1};
  color: ${colors.PRIMARY_1};
`;

// const ImageContainer = styled.div``;

// const Header : React.FC<IProps>= ({title}) => {
//   return <div>{title}</div>

// }

const SLink = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.PRIMARY_1};
`;

const LinkButton: React.FC<{ path: string; title: string }> = ({ path, title }) => {
  return <SLink to={path}>{title}</SLink>;
};

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
      <Title>{title}</Title>
      <LinkButton path="/login" title="Login" />
    </Wrapper>
  );
};

export default Header;
