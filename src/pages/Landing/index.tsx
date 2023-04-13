/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Header from "@components/common/Header";
import Content from "@components/common/Content";
import * as size from "@constants/size";
import * as margins from "@constants/margins";
import ServiceBanner from "@components/Landing/ServiceBanner";
import { ESERVICE_TYPE } from "types/enum";
import { useTypedDispatch, useTypedSelector } from "@hooks/useStore";
import { actions as modalActions } from "@store/slices/modalSlice";
import SignInWarningModal from "modals/SignInWarningModal";

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
`;

const Margin = styled.div`
  height: ${margins.TOP_MARGIN};
`;

const Landing: React.FC = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.rootReducer.authReducer.isAuthenticated,
  );
  const isSignInWarning = useTypedSelector(
    (state) => state.rootReducer.modalReducer.isSignInWarning,
  );
  const dispatch = useTypedDispatch();
  const handleBannerClick = () => {
    if (isAuthenticated) return;
    dispatch(modalActions.showSignInWarning());
  };

  return (
    <>
      {isSignInWarning && <SignInWarningModal />}
      <Header title="GCF CAR" mode="logo"></Header>
      <Content top={size.HEADER_HEIGHT} bottom="0">
        <Margin />
        <ServiceContainer>
          <ServiceBanner type={ESERVICE_TYPE.PICKUP} onClick={handleBannerClick} />
          <ServiceBanner type={ESERVICE_TYPE.TELCOM} onClick={handleBannerClick} />
        </ServiceContainer>
        <ServiceContainer>
          <ServiceBanner type={ESERVICE_TYPE.MOVE} onClick={handleBannerClick} />
          <ServiceBanner type={ESERVICE_TYPE.CAR} onClick={handleBannerClick} />
        </ServiceContainer>
      </Content>
    </>
  );
};

export default Landing;
