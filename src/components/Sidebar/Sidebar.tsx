import { observer } from "mobx-react";
import React, { useContext } from "react";

import { Button, SidebarWrapper } from "../";
import { DialogStateContext } from "../../stores";

export default observer(() => {
  const dialogState = useContext(DialogStateContext);

  return (
    <SidebarWrapper>
      <Button
        onClick={(e) => {
          dialogState.addDialogOpen = true;
        }}
      >
        Add a note
      </Button>
    </SidebarWrapper>
  );
});
