import { ElevationProps, Colors, ElevationStyles } from '@class101/ui';

import { defaultTo } from 'lodash-es';
import React from 'react';
import styled from 'styled-components';

export const Elevation = styled.div<ElevationProps>`
  flex: 1 1 20%;
  background-color: white;
  margin: 4px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => ElevationStyles[`elevation${defaultTo(props.elevation, 1)}`]}
`;

export const Container = styled.div`
  padding: 32px;
  display: flex;
  background: ${Colors.gray000};
`;
