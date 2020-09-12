import React from "react";

import {
  Connectionbar,
  EditorWrapper,
  GraphWrapper,
  MainWrapper,
  Sidebar,
  WrapperDiv,
} from "./components";

const App = () => {
  return (
    <WrapperDiv>
      <Sidebar />
      <MainWrapper>
        <GraphWrapper></GraphWrapper>
        <EditorWrapper></EditorWrapper>
      </MainWrapper>
      <Connectionbar />
    </WrapperDiv>
  );
};

export default App;
