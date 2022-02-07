/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

type Size = 'small' | 'medium' | 'large';

const ProgressBar = ({ value, size }: { value: number; size: Size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--value": value + "%",
      }}
      size={size}
    >
      <OuterBar></OuterBar>
      <InnerBar value={value}></InnerBar>
    </Wrapper>
  );
};

const BAR_HEIGHTS: Record<Size, string> = {
  large: '16px',
  medium: '12px',
  small: '8px',
}

const Wrapper = styled.div`
  position: relative;
  width: 370px;
  height: ${(p) => BAR_HEIGHTS[p.size]};
`;
const OuterBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;
const calculateRightBorderRadius = (value: number, maxBorderRadius: number) => {
  return ((Math.max(0, value - 99)) * maxBorderRadius) + 'px';
};
const calculateLeftBorderRadius = (value: number, maxBorderRadius: number) => {
  return ((Math.min(1, value)) * maxBorderRadius) + 'px';
};
const InnerBar = styled.div`
  height: 100%;
  width: var(--value);
  background-color: ${COLORS.primary};
  border-radius:
    ${p => calculateLeftBorderRadius(p.value, 4)}
    ${p => calculateRightBorderRadius(p.value, 4)}
    ${p => calculateRightBorderRadius(p.value, 4)}
    ${p => calculateLeftBorderRadius(p.value, 4)};
`;

export default ProgressBar;
