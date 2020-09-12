import { graphConfig } from "../types/graph";

export const getGraphConfiguration: (
  width: number,
  height: number
) => graphConfig = (width, height) => ({
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1.8,
  height,
  highlightDegree: 0,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 3,
  minZoom: 0.5,
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
    labelProperty: "title",
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
