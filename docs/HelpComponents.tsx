import { BreakPoints, Colors, ThemeConfig, ThemeMode } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

export const PlayGroundContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 20px;
  background-color: ${props => (props.theme.mode === ThemeMode.dark ? Colors.gray900 : Colors.white)};
`;

export const PlayGroundBanner = styled.div<{ backgroundColor?: string; fill?: boolean }>`
  width: ${props => (props.fill ? '100%' : '100px')};
  height: 208px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor || Colors.gray600};
`;

export const PlayGroundSectionCarouselContent = styled.div`
  ${BreakPoints.media.sm`
    margin: 0 -24px;
  `}
`;

export { ThemeProvider } from 'styled-components';
