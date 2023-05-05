/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Landing from "./pages/Landing";
import * as colors from "@constants/colors";
import Login from "pages/Auth/Login";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "pages/Error";
import CarService from "pages/CarService";
import PickupService from "pages/PickupService";
import TelcomService from "pages/TelcomService";
import MoveService from "pages/MoveSerivce";
import MyBooking from "pages/MyBooking";
import { Suspense, useEffect } from "react";
import SignUp from "pages/Auth/SignUp";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "@hooks/useStore";
import CarBuy from "pages/CarService/CarBuy";

const MobileWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

function App() {
  const Fallback = () => {
    return <div>loading...</div>;
  };

  const isAuthenticated = useTypedSelector(
    (state) => state.rootReducer.userReducer.isAuthenticated,
  );

  // TODO: 여기에 쿠키 확인해서, 로그인 체크하는 로직 넣기

  return (
    <MobileWrapper>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* auth */}
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate replace to="/" />}
            />
            <Route path="/sign-up" element={<SignUp />} />
            {/* pickup service */}
            <Route
              path="/my-booking"
              element={isAuthenticated ? <MyBooking /> : <Navigate replace to="/" />}
            />
            {/* pickup service */}
            <Route
              path="/pickup"
              element={isAuthenticated ? <PickupService /> : <Navigate replace to="/" />}
            />
            {/* telcom service */}
            <Route
              path="/telcom"
              element={isAuthenticated ? <TelcomService /> : <Navigate replace to="/" />}
            />
            {/* move service */}
            <Route
              path="/move"
              element={isAuthenticated ? <MoveService /> : <Navigate replace to="/" />}
            />
            {/* car service */}
            <Route
              path="/car"
              element={isAuthenticated ? <CarService /> : <Navigate replace to="/" />}
            />
            <Route
              path="/car/buy/:carBasicId"
              element={isAuthenticated ? <CarBuy /> : <Navigate replace to="/" />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </MobileWrapper>
  );
}

export default App;
