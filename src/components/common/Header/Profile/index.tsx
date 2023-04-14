/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as size from "@constants/size";
import * as colors from "@constants/colors";
import * as fonts from "@constants/fonts";
import { useTypedDispatch } from "@hooks/useStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { actions as authActions } from "@store/slices/authSlice";

const ProfileBox = styled.div`
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
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.BLACK_1};
`;

const Wrapper = styled.div``;

const ProfileDropBox = styled.div`
  position: absolute;
  top: ${size.HEADER_HEIGHT};
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  height: 50px;
  width: 100px;
  background-color: ${colors.WHITE_1};
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.FONT_SMALL_400};
  color: ${colors.BLACK_1};
`;

const Profile: React.FC = () => {
  const [isProfileClicked, setIsProfileClicked] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const handleProfileClick = () => setIsProfileClicked(!isProfileClicked);
  const handleLogoutClick = () => dispatch(authActions.unAuthenticate());

  return (
    <Wrapper>
      <ProfileBox onClick={handleProfileClick}>
        <FontAwesomeIcon icon={faUser} fontSize={"24px"} />
        <ProfileName>Minho</ProfileName>
      </ProfileBox>
      {isProfileClicked && (
        <ProfileDropBox>
          <Logout onClick={handleLogoutClick}>Logout</Logout>
        </ProfileDropBox>
      )}
    </Wrapper>
  );
};

export default Profile;
