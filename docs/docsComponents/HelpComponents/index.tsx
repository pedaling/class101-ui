import {
  BreakPoints, Colors, Divider, ThemeConfig, ifDarkTheme,
} from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

export const PlayGroundContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 20px;
  background-color: ${Colors.white};
  ${ifDarkTheme(`background-color: ${Colors.gray900}`)};
`;

export const PlayGroundButtonContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 16px;
  background-color: ${Colors.white};
  ${ifDarkTheme(`background-color: ${Colors.gray900}`)};
  > * {
    margin: 4px;
  }
`;

export const PlayGroundBanner = styled.div<{ backgroundColor?: string; }>`
  width: 100%;
  height: 208px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor ?? Colors.gray600};
`;

export const PlayGroundSectionCarouselContent = styled.div`
  ${BreakPoints.media.sm`
    margin: 0 -24px;
  `}
`;

export const SwiperCard = styled.div`
  width: 100%;
  > img {
    display: block;
    width: 100%;
  }
`;

export const PreloadImage = styled.div`
  width: 100%;
  height: 100px;
  background: ${Colors.red000};
`;

export const StyledDivider = styled(Divider)`
  padding: 12px 0;
`;

export { ThemeProvider } from 'styled-components';
