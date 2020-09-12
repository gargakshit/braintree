import React from "react";

import { Connectionbar } from "./components/Connectionbar";
import { Sidebar } from "./components/Sidebar";
import { WrapperDiv } from "./components/WrapperDiv";

const App = () => {
  return (
    <WrapperDiv>
      <Sidebar />
      <div style={{ backgroundColor: "#2a2a2a", flex: 5 }}></div>
      <Connectionbar />
    </WrapperDiv>
  );
};

export default App;
