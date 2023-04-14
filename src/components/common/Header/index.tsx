/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as size from "@constants/size";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import * as margins from "@constants/margins";
import { Link } from "react-router-dom";
import Image from "@components/common/Image";
import leftArrowImage from "@assets/images/left-arrow-24x24.svg";
import { useTypedSelector } from "@hooks/useStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  title: string;
  mode: "logo" | "back" | "close";
  // login
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

const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_HEADER_600};
  color: ${colors.PRIMARY_1};
`;

const BackTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_BIG_600};
  color: ${colors.PRIMARY_1};
`;

const SLink = styled(Link)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_MEDIUM_600};
  color: ${colors.PRIMARY_1};
`;

const LinkButton: React.FC<{ path: string; title: string }> = ({ path, title }) => {
  return <SLink to={path}>{title}</SLink>;
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const ProfileName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  margin: 5px 0 0 0;
  font: ${fonts.FONT_TINY_600};
  color: ${colors.BLACK_1};
`;

const Header: React.FC<IProps> = ({ title, mode }) => {
  const isAuthenticated = useTypedSelector(
    (state) => state.rootReducer.authReducer.isAuthenticated,
  );

  const homePath = window.location.hostname === "minhob38.github.io" ? "/gcf" : "/";
  const signInPath =
    window.location.hostname === "minhob38.github.io" ? "/gcf/sign-in" : "/sign-in";

  switch (mode) {
    case (mode = "logo"):
      return (
        <Wrapper>
          <LogoTitle>{title}</LogoTitle>
          {!isAuthenticated ? (
            <LinkButton path={signInPath} title="Login" />
          ) : (
            <ProfileContainer>
              <FontAwesomeIcon icon={faUser} fontSize={"24px"} />
              <ProfileName>Minho</ProfileName>
            </ProfileContainer>
          )}
        </Wrapper>
      );
    case (mode = "back"):
      return (
        <Wrapper>
          <Link to={homePath}>
            <Image src={leftArrowImage} alt="back" height="24px" />
          </Link>
          <BackTitle>{title}</BackTitle>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <LogoTitle>{title}</LogoTitle>
          {!isAuthenticated ? (
            <LinkButton path={signInPath} title="Login" />
          ) : (
            <ProfileContainer>
              <FontAwesomeIcon icon={faUser} fontSize={"24px"} />
              <ProfileName>Minho</ProfileName>
            </ProfileContainer>
          )}
        </Wrapper>
      );
  }
};

export default Header;
