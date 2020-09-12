import styled from "styled-components";

export default styled.button`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
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
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`;
