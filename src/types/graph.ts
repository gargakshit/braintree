import { GraphConfiguration, GraphData } from "react-d3-graph";

import { Payload } from "./payload";

interface Node {
  id: string;
  title: string;
  payload: Payload;
}

interface Link {
  source: string;
  target: string;
}

export type graphData = GraphData<Node, Link>;
export type graphConfig = GraphConfiguration<Node, Link>;
