import { createContext } from "react";
import { action, observable } from "mobx";

class GraphState {}

const GraphStateContext = createContext(new GraphState());
export { GraphStateContext };
