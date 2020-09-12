import React from "react";

import {
  Connectionbar,
  Editor,
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
        <EditorWrapper>
          <Editor />
        </EditorWrapper>
      </MainWrapper>
      <Connectionbar />
    </WrapperDiv>
  );
};

export default App;
