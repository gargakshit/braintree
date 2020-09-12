import { observer } from "mobx-react";
import React, {
  useState,
  useLayoutEffect,
  useCallback,
  useContext,
} from "react";
import { Graph } from "react-d3-graph";
import styled from "styled-components";
import { getGraphConfiguration } from "../../config/graphConfig";
import { GraphStateContext } from "../../stores";

const NoDataHead = styled.h1`
  opacity: 0.48;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default observer(() => {
  const [focus, setFocus] = useState<string | undefined>(undefined);
  const [tick, setTick] = useState(0);
  const graphState = useContext(GraphStateContext);

  const forceUpdate = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", forceUpdate);
    return () => window.removeEventListener("resize", forceUpdate);
  }, []);

  return (
    <div
      className="code"
      style={{
        backgroundColor: "#2a2a2a",
        height: "100%",
        width: "100%",
      }}
    >
      {graphState.data.nodes.length !== 0 && (
        <Graph
          id={"graph-id" + tick.toString()}
          data={{
            ...graphState.data,
            focusedNodeId: focus,
          }}
          config={getGraphConfiguration(
            (window.innerWidth * 5) / 7,
            window.innerHeight / 2
          )}
          onClickNode={(id) => {
            setFocus(id);
          }}
        />
      )}
      {graphState.data.nodes.length === 0 && (
        <CenterWrapper>
          <NoDataHead>No notes here :O</NoDataHead>
        </CenterWrapper>
      )}
    </div>
  );
});
