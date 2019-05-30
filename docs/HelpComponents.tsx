import { Colors, ThemeConfig, ThemeMode } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

export const PlayGroundContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 20px;
  background-color: ${props => (props.theme.mode === ThemeMode.dark ? Colors.gray900 : Colors.white)};
`;

export { ThemeProvider } from 'styled-components';
