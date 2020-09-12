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

const NoDataHead = styled.h1`
  opacity: 0.48;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const FormatButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 2;
  width: 184px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #121212;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.64px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-duration: 500ms;
  transition-property: all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;

export default observer(() => {
  const editorState = useContext(EditorStateContext);

  return (
    <>
      {editorState.currentFile === null && (
        <CenterWrapper>
          <NoDataHead>No note selected</NoDataHead>
        </CenterWrapper>
      )}
      {editorState.currentFile !== null && (
        <ComponentWrapper>
          <FormatButton
            onClick={(e) => {
              editorState.prettifyMarkdown();
            }}
          >
            Prettify Markdown
          </FormatButton>
          <EditorTextArea
            placeholder="# Add some markdown here"
            value={editorState.currentMarkdown}
            onChange={(e) => {
              editorState.updateMarkdown(e.target.value);
            }}
          />
          <EditorPreview
            dangerouslySetInnerHTML={{ __html: editorState.currentHtml }}
          />
        </ComponentWrapper>
      )}
    </>
  );
});
