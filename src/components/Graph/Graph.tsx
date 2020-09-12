import React, { useState, useLayoutEffect, useCallback } from "react";
import { Graph, GraphConfiguration, GraphData } from "react-d3-graph";

const config: (
  width: number,
  height: number
) => GraphConfiguration<
  {
    id: string;
    payload: any;
  },
  {
    source: string;
    target: string;
  }
> = (width, height) => ({
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 2.2,
  height,
  highlightDegree: 0,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 3,
  minZoom: 0.75,
  nodeHighlightBehavior: false,
  panAndZoom: true,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width,
  d3: {
    alphaTarget: 0.05,
    gravity: -1680,
    linkLength: 120,
    linkStrength: 0.85,
    disableLinkForce: false,
  },
  node: {
    color: "#212121",
    fontColor: "#f0f0f0",
    fontSize: 16,
    fontWeight: "500",
    highlightColor: "SAME",
    highlightFontSize: 20,
    highlightFontWeight: "bold",
    highlightStrokeColor: "SAME",
    highlightStrokeWidth: "SAME",
    labelProperty: "id",
    mouseCursor: "grab",
    opacity: 1,
    renderLabel: true,
    size: 1300,
    strokeColor: "#e2e2e2",
    strokeWidth: 4,
    svg: "",
    symbolType: "circle",
  },
  link: {
    color: "#f0f0f0",
    fontColor: "#f0f0f0",
    fontSize: 8,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 8,
    highlightFontWeight: "normal",
    mouseCursor: "default",
    opacity: 0.36,
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 2,
    markerHeight: 6,
    markerWidth: 6,
  },
});

const data: GraphData<
  {
    id: string;
    payload: any;
  },
  {
    source: string;
    target: string;
  }
> = {
  nodes: [
    { id: "College", payload: {} },
    { id: "Clubs", payload: {} },
    { id: "Machine Learning Club", payload: {} },
    { id: "DSC", payload: {} },
    { id: "Subjects", payload: {} },
    { id: "Computer Science", payload: {} },
    { id: "Machine Learning", payload: {} },
    { id: "Calculus", payload: {} },
    { id: "Maths", payload: {} },
    { id: "Contour Plots", payload: {} },
    { id: "Fast Track Project", payload: {} },
  ],
  links: [
    { source: "College", target: "Subjects" },
    { source: "College", target: "Clubs" },
    { source: "Clubs", target: "DSC" },
    { source: "Clubs", target: "Machine Learning Club" },
    { source: "Machine Learning Club", target: "Machine Learning" },
    { source: "DSC", target: "Computer Science" },
    { source: "Subjects", target: "Maths" },
    { source: "Subjects", target: "Computer Science" },
    { source: "Computer Science", target: "Machine Learning" },
    { source: "Machine Learning", target: "Calculus" },
    { source: "Machine Learning", target: "Maths" },
    { source: "Maths", target: "Calculus" },
    { source: "Maths", target: "Contour Plots" },
    { source: "Fast Track Project", target: "Computer Science" },
  ],
};

const useForceUpdate = () => useState()[1];

export default () => {
  const [focus, setFocus] = useState<string | undefined>(undefined);
  const [tick, setTick] = useState(0);
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
      <Graph
        id={"graph-id" + tick.toString()}
        data={{
          ...data,
          focusedNodeId: focus,
        }}
        config={config((window.innerWidth * 5) / 7, window.innerHeight / 2)}
        onClickNode={(id) => {
          setFocus(id);
        }}
      />
    </div>
  );
};
