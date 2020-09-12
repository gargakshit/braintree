import { observable } from "mobx";
import { createContext } from "react";

class DialogState {
  @observable
  addDialogOpen: boolean = false;
}

const DialogStateContext = createContext(new DialogState());
export { DialogStateContext };
