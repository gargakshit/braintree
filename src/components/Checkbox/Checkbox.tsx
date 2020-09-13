import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const checkedKeyframes = keyframes`
  from {
    transform: translateZ(12px);
  }
  to {
    transform: translateX(16px) rotateY(90deg) translateZ(12px);
  }
`;

const uncheckedKeyframes = keyframes`
  from {
    transform: translateX(-16px) rotateY(-90deg) translateZ(12px);
  }
  to {
    transform: translateZ(12px);
  }
`;

const checked = keyframes`
  from {
    background-image: radial-gradient(ellipse at center, var(--primary) 0%, var(--primary) 25%, var(--secondary) 25.1%, var(--secondary) 100%);
    background-position: 100% 50%;
  }
  to {
    background-image: radial-gradient(ellipse at center, var(--primary) 0%, var(--primary) 25%, var(--secondary) 25.1%, var(--secondary) 100%);
    background-position: 50% 50%;
  }
`;

const unchecked = keyframes`
  from {
    background-image: radial-gradient(ellipse at center, var(--secondary) 0%, var(--secondary) 25%, var(--primary) 25.1%, var(--primary) 100%);
    background-position: 100% 50%;
  }
  to {
    background-image: radial-gradient(ellipse at center, var(--secondary) 0%, var(--secondary) 25%, var(--primary) 25.1%, var(--primary) 100%);
    background-position: 50% 50%;
  }
`;

const Switch = styled.input`
  --primary: #212121;
  --secondary: #f0f0f0;
  --duration: 0.5s;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 240px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: 4px solid var(--primary);
  background-size: 300% 300%;
  transition: transform 0.3s;
  transform: scale(var(--scale, 1)) translateZ(0);
  animation: var(--name, ${unchecked}) var(--duration) ease forwards;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: var(--height, 16px);
    left: 6px;
    top: var(--top, 6px);
    background: var(--background, var(--primary));
    animation: var(--name-icon-b, var(--name-icon, ${uncheckedKeyframes}))
      var(--duration) ease forwards;
  }
  &:before {
    clip-path: polygon(
      0 6px,
      6px 6px,
      6px 0,
      10px 0,
      10px 6px,
      16px 6px,
      16px 10px,
      10px 10px,
      10px 16px,
      6px 16px,
      6px 10px,
      0 10px
    );
  }
  &:after {
    --height: 4px;
    --top: 12px;
    --background: var(--secondary);
    --name-icon-b: var(--name-icon-a, ${checkedKeyframes});
  }
  &:active {
    --scale: 0.95;
  }
  &:checked {
    --name: ${checked};
    --name-icon-b: ${checkedKeyframes};
    --name-icon-a: ${uncheckedKeyframes};
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
