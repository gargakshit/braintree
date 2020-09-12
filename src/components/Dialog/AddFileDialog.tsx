import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { Dialog } from "./";
import {
  DialogStateContext,
  EditorStateContext,
  GraphStateContext,
} from "../../stores";

const DialogWrapper = styled.div`
  padding-left: 24px;
  /* css hackjob */
  padding-right: 40px;
  padding-bottom: 24px;
  background-color: #eeeeee;
  border-radius: 12px;
  color: #121212;
  z-index: 16;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const StyledInput = styled.input`
  width: 100%;
  appearance: none;
  border-width: 2px;
  padding-left: 8px;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition-duration: 500ms;
  transition-property: all;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  &:active {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const OKButton = styled.button`
  width: 50%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #813d8a;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.64px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-duration: 500ms;
  transition-property: all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  &:disabled {
    background-color: #666666;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  width: 50%;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #fe8585;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.64px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-duration: 500ms;
  transition-property: all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const Divider = styled.div`
  margin-top: 16px;
`;

export default observer(() => {
  const dialogState = useContext(DialogStateContext);
  const editorState = useContext(EditorStateContext);
  const graphState = useContext(GraphStateContext);

  const [fname, setFname] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (fname !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [fname]);

  if (dialogState.addDialogOpen) {
    return (
      <Dialog>
        <DialogWrapper>
          <h2>Enter the name of the note</h2>
          <StyledInput
            placeholder="My awesome note"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <Divider />
          <div style={{ display: "flex" }}>
            <OKButton
              disabled={!valid}
              onClick={async (e) => {
                await editorState.createFile(fname);
                await graphState.addFile(fname);
                dialogState.addDialogOpen = false;
                setFname("");
              }}
            >
              OK
            </OKButton>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <CancelButton
              onClick={(e) => {
                dialogState.addDialogOpen = false;
              }}
            >
              Cancel
            </CancelButton>
          </div>
        </DialogWrapper>
      </Dialog>
    );
  } else {
    return <div />;
  }
});
