import { Colors, ElevationStyles } from '@class101/ui';
import React from 'react';
import styled, { css } from 'styled-components';

const customStyle = css`
  flex: 1 1 20%;
  background-color: white;
  margin: 4px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Elevation1 = styled.div`
  ${customStyle}
  ${ElevationStyles.elevation1};
`;
export const Elevation2 = styled.div`
  ${customStyle}
  ${ElevationStyles.elevation2};
`;
export const Elevation3 = styled.div`
  ${customStyle}
  ${ElevationStyles.elevation3};
`;
export const Elevation4 = styled.div`
  ${customStyle}
  ${ElevationStyles.elevation4};
`;
export const Elevation5 = styled.div`
  ${customStyle}
  ${ElevationStyles.elevation5};
`;

export const Container = styled.div`
  padding: 32px;
  display: flex;
  background: ${Colors.gray000};
`;
