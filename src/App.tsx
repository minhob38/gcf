/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Landing from "./pages/Landing";
import * as colors from "@constants/colors";
import Login from "pages/Login";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "pages/Error";
import CarService from "pages/CarService";
import PickupService from "pages/PickupService";
import TelcomService from "pages/TelcomService";

const MobileWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

function App() {
  return (
    <MobileWrapper>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/gcf" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/gcf/login" element={<Login />}></Route>
          {/* pickup service */}
          <Route path="/pickup" element={<PickupService />}></Route>
          <Route path="/gcf/pickup" element={<PickupService />}></Route>
          {/* telcom service */}
          <Route path="/telcom" element={<TelcomService />}></Route>
          <Route path="/gcf/telocm" element={<TelcomService />}></Route>
          {/* car service */}
          <Route path="/car" element={<CarService />}></Route>
          <Route path="/gcf/car" element={<CarService />}></Route>
        </Routes>
      </ErrorBoundary>
    </MobileWrapper>
  );
}

export default App;
