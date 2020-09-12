import React from "react";
import { Sidebar } from "./components/Sidebar";

import { WrapperDiv } from "./components/WrapperDiv";

const App = () => {
  return (
    <WrapperDiv>
      <Sidebar />
      <div style={{ backgroundColor: "black", flex: 6 }}></div>
    </WrapperDiv>
  );
};

export default App;
