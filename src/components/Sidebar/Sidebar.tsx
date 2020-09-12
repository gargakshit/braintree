import { observer } from "mobx-react";
import React, { useContext } from "react";
import styled from "styled-components";

import { Button, SidebarWrapper } from "../";
import {
  DialogStateContext,
  EditorStateContext,
  GraphStateContext,
} from "../../stores";

const NoteNameContainer = styled.div<{ selected?: boolean }>`
  font-weight: ${(props) => (props.selected ? "bold" : 500)};
  font-size: 16px;
  padding-top: ${(props) => (props.selected ? "6px" : "4px")};
  padding-bottom: ${(props) => (props.selected ? "6px" : "4px")};
  padding-left: ${(props) => (props.selected ? "12px" : "0px")};
  background-color: ${(props) =>
    props.selected ? "rgba(186, 186, 186, 0.28)" : "transparent"};
  transition-duration: 500ms;
  transition-property: all;
  cursor: pointer;
  border-radius: 4px;
`;

const Divider = styled.div`
  margin-top: 16px;
`;

export default observer(() => {
  const dialogState = useContext(DialogStateContext);
  const editorState = useContext(EditorStateContext);
  const graphState = useContext(GraphStateContext);

  return (
    <SidebarWrapper>
      <Button
        onClick={(e) => {
          dialogState.addDialogOpen = true;
        }}
      >
        Add a note
      </Button>
      <Divider />
      {graphState.data.nodes.map((node, i) => (
        <NoteNameContainer
          selected={editorState.currentFile! === node.payload.fileName}
          onClick={(e) => {
            editorState.loadFile(node.payload.fileName);
          }}
          key={`sidebar__${i}`}
        >
          {node.title}
        </NoteNameContainer>
      ))}
    </SidebarWrapper>
  );
});
