import { observer } from "mobx-react";
import React, { useContext } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { Button, SidebarWrapper } from "../";
import { Checkbox } from "../Checkbox";
import { GraphStateContext, EditorStateContext } from "../../stores";

const ModalContainer = observer(styled.div`
  width: ${`${window.innerWidth / 3}px`};
  height: ${`${window.innerHeight / 2}px`};
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 28px;
  padding-bottom: 28px;
  border-radius: 4px;
  color: #121212;
  background-color: rgba(236, 236, 236, 0.95);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`);

const NoteNameContainer = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  transition-duration: 500ms;
  transition-property: all;
  cursor: pointer;
  border-radius: 4px;
`;

const Divider = styled.div`
  margin-top: 16px;
`;

export default observer(() => {
  const graphState = useContext(GraphStateContext);
  const editorState = useContext(EditorStateContext);

  return (
    <SidebarWrapper>
      {editorState.currentFile !== null && (
        <>
          <Popup
            trigger={
              <Button disabled={editorState.currentFile === null}>
                Add a connection
              </Button>
            }
            modal
          >
            {(close: () => {}) => {
              const current = graphState.data.nodes.filter(
                (node) => node.payload.fileName === editorState.currentFile
              )[0];

              return (
                <ModalContainer>
                  <h3>Select the nodes to connect to</h3>
                  <div
                    style={{
                      height: `${window.innerHeight / 2 - 48}px`,
                      overflow: "scroll",
                    }}
                  >
                    {graphState.data.nodes
                      .filter(
                        (node) =>
                          node.payload.fileName !== editorState.currentFile
                      )
                      .map((node, i) => (
                        <Checkbox
                          name={node.title}
                          value={graphState.hasEdge(current.id, node.id)}
                          onChanged={(e) => {
                            if (e) {
                              graphState.addEdge(current.id, node.id);
                            } else {
                              graphState.removeEdge(current.id, node.id);
                            }
                          }}
                          key={`modal___connections___${i}`}
                        />
                      ))}
                    <div style={{ height: "20px" }} />
                  </div>
                  <Button
                    onClick={() => {
                      close();
                    }}
                  >
                    Close
                  </Button>
                </ModalContainer>
              );
            }}
          </Popup>
          <Divider />
        </>
      )}
    </SidebarWrapper>
  );
});
