/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import Landing from "./pages/Landing";

const Wrapper = styled.div({
  width: "100%",
  height: "100%",
});

function App() {
  return (
    <Wrapper>
      {/* <Home /> */}
      {/* <Button label="Click 📝" /> */}
      {/* <LinkButton path="/plane" /> */}
      {/* <LinkButton path="/train" /> */}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/plane" element={<Plane />}></Route> */}
        {/* <Route path="/train" element={<Train />}></Route> */}
      </Routes>
      {/* <button css={buttonStyle} onClick={() => subscribeServer()}>
        Server Subscription
      </button>
      <button css={buttonStyle} onClick={() => notifyServer()}>
        Server Notification
      </button> */}
    </Wrapper>
  );
}

export default App;
