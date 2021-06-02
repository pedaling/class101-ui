import { Colors, ElevationProps, ElevationStyles } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

export const Elevation = styled.div<ElevationProps>`
  flex: 1 1 20%;
  background-color: white;
  margin: 8px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => ElevationStyles[`elevation${props.elevation ?? 1}`]}
`;

export const Container = styled.div`
  padding: 32px;
  display: flex;
  background: white;
  border: 1px solid ${Colors.gray100};
`;
