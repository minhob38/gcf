/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Landing from "./pages/Landing";
import * as colors from "@constants/colors";
import SignIn from "pages/Auth/SignIn";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "pages/Error";
import CarService from "pages/CarService";
import PickupService from "pages/PickupService";
import TelcomService from "pages/TelcomService";
import MoveService from "pages/MoveSerivce";
import { Suspense } from "react";
import SignUp from "pages/Auth/SignUp";
import { Navigate } from "react-router-dom";

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

  const isLogin = false;

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
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/gcf/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/gcf/sign-up" element={<SignUp />}></Route>
            {/* pickup service */}
            <Route
              path="/pickup"
              element={isLogin ? <PickupService /> : <Navigate replace to="/" />}
            ></Route>
            <Route path="/gcf/pickup" element={<PickupService />}></Route>
            {/* telcom service */}
            <Route path="/telcom" element={<TelcomService />}></Route>
            <Route path="/gcf/telcom" element={<TelcomService />}></Route>
            {/* move service */}
            <Route path="/move" element={<MoveService />}></Route>
            <Route path="/gcf/move" element={<MoveService />}></Route>
            {/* car service */}
            <Route path="/car" element={<CarService />}></Route>
            <Route path="/gcf/car" element={<CarService />}></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </MobileWrapper>
  );
}

export default App;
