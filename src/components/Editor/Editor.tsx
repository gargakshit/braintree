import React, { useContext } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { EditorStateContext } from "../../stores";

const EditorTextArea = styled.textarea`
  border: none transparent;
  outline: none;
  background-color: #212121;
  flex: 1;
  resize: none;
  color: #f0f0f0;
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-family: "Fira Code VF";

  &::selection {
    background-color: rgba(240, 240, 240, 0.24);
    color: white;
  }

  &::-webkit-scrollbar {
    width: 12px;
    cursor: grab;
  }

  &::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.06);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(240, 240, 240, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(240, 240, 240, 0.56);
  }
`;

const ComponentWrapper = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
`;

const EditorPreview = styled.div`
  border: none transparent;
  outline: none;
  background-color: #212121;
  flex: 1;
  resize: none;
  color: #f0f0f0;
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-family: "Fira Code VF";
  overflow: scroll;

  &::selection {
    background-color: rgba(240, 240, 240, 0.24);
    color: white;
  }

  &::-webkit-scrollbar {
    width: 12px;
    cursor: grab;
  }

  &::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.06);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(240, 240, 240, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(240, 240, 240, 0.56);
  }
`;

export default observer(() => {
  const editorState = useContext(EditorStateContext);

  return (
    <ComponentWrapper>
      <EditorTextArea
        placeholder="# Add some markdown here"
        value={editorState.currentMarkdown}
        onChange={(e) => {
          editorState.updateMarkdown(e.target.value);
        }}
      ></EditorTextArea>
      <EditorPreview
        dangerouslySetInnerHTML={{ __html: editorState.currentHtml }}
      />
    </ComponentWrapper>
  );
});
