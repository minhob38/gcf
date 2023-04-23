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
import { Suspense } from "react";
import SignUp from "pages/Auth/SignUp";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "@hooks/useStore";

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
    (state) => state.rootReducer.authReducer.isAuthenticated,
  );
  // const isAuthenticated = false;
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
            <Route path="/" element={<Landing />}></Route>
            <Route path="/gcf" element={<Landing />}></Route>
            {/* auth */}
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate replace to="/" />}
            ></Route>
            <Route
              path="/gcf/login"
              element={!isAuthenticated ? <Login /> : <Navigate replace to="/gcf" />}
            ></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/gcf/sign-up" element={<SignUp />}></Route>
            {/* pickup service */}
            {/* <Route
              path="/pickup"
              element={isAuthenticated ? <PickupService /> : <Navigate replace to="/" />}
            ></Route> */}
            <Route path="/pickup" element={<PickupService />}></Route>
            <Route
              path="/gcf/pickup"
              element={isAuthenticated ? <PickupService /> : <Navigate replace to="/gcf" />}
            ></Route>
            {/* telcom service */}
            <Route
              path="/telcom"
              element={isAuthenticated ? <TelcomService /> : <Navigate replace to="/" />}
            ></Route>
            <Route
              path="/gcf/telcom"
              element={isAuthenticated ? <TelcomService /> : <Navigate replace to="/gcf" />}
            ></Route>
            {/* move service */}
            <Route
              path="/move"
              element={isAuthenticated ? <MoveService /> : <Navigate replace to="/" />}
            ></Route>
            <Route
              path="/gcf/move"
              element={isAuthenticated ? <MoveService /> : <Navigate replace to="/gcf" />}
            ></Route>
            {/* car service */}
            <Route
              path="/car"
              element={isAuthenticated ? <CarService /> : <Navigate replace to="/" />}
            ></Route>
            <Route
              path="/gcf/car"
              element={isAuthenticated ? <CarService /> : <Navigate replace to="/gcf" />}
            ></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </MobileWrapper>
  );
}

export default App;
