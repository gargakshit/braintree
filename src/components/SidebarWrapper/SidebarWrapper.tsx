import styled from "styled-components";

export default styled.div`
  flex: 1;
  background-color: #212121;
  padding-top: ${process.platform !== "darwin" ? "24px" : "40px"};
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;
