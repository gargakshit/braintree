import React from "react";

import {
  Connectionbar,
  Editor,
  EditorWrapper,
  Graph,
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
        <GraphWrapper>
          <Graph />
        </GraphWrapper>
        <EditorWrapper>
          <Editor />
        </EditorWrapper>
      </MainWrapper>
      <Connectionbar />
    </WrapperDiv>
  );
};

export default App;
