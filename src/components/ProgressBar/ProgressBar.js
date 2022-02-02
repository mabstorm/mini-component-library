/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper><InnerBar
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--size': size + '%',
      }}
    >{value}</InnerBar></Wrapper>
  );
};

const Wrapper = styled.div`
  width: '370px';
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 5px;
`;
const InnerBar = styled.div`
  width: var(--size);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
