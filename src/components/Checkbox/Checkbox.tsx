import React, { useState } from "react";
import styled from "styled-components";

const Switch = styled.input`
  appearance: none;
  cursor: pointer;
  height: 32px;
  width: 52px;
  border-radius: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 2px solid #474755;
  background: linear-gradient(180deg, #2d2f39 0%, #1f2027 100%);
  transition: all 0.2s ease;
  &:focus {
    outline: 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  &:checked {
    border-color: #813d8a;
    &:after {
      transform: translatex(20px);
    }
  }
`;

export default ({
  name,
  value,
  onChanged,
}: {
  name: string;
  value: boolean;
  onChanged: (event: boolean) => void;
}) => {
  const [checked, setChecked] = useState(value);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ width: "100%" }}>{name}</span>
      <div>
        <Switch
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            onChanged(!checked);
            setChecked(!checked);
          }}
        />
      </div>
    </div>
  );
};
