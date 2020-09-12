import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";

import {
  AddFileDialog,
  Connectionbar,
  Editor,
  EditorWrapper,
  Graph,
  GraphWrapper,
  MainWrapper,
  Sidebar,
  WrapperDiv,
} from "./components";
import { GraphStateContext } from "./stores";

const App = () => {
  const graphState = useContext(GraphStateContext);

  useEffect(() => {
    graphState.hydrateMetadata();
  }, []);

  return (
    <WrapperDiv>
      <AddFileDialog />
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

export default observer(App);
