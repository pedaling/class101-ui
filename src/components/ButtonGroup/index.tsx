import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { gray100, gray700 } from '../../core/Colors';
import { ThemeConfig, ThemeMode } from '../../core/Theme';
import { ButtonProps } from '../Button/ContainButton';
import { ButtonColor } from '../Button/interface';

export interface ButtonGroupProps {
  vertical?: boolean;
  fill?: boolean;
  theme?: ThemeConfig;
  'data-element-name'?: string;
}

export class ButtonGroup extends PureComponent<ButtonGroupProps> {
  public render() {
    const { children, vertical, fill, theme, 'data-element-name': dataElementName } = this.props;
    return (
      <ButtonGroupContainer vertical={vertical} fill={fill} theme={theme} data-element-name={dataElementName}>
        {React.Children.map(
          children,
          child =>
            child && React.cloneElement(child as React.ReactElement<ButtonProps>, { theme, color: ButtonColor.DEFAULT })
        )}
      </ButtonGroupContainer>
    );
  }
}

const VerticalStyle = (theme: ThemeMode) => css`
  flex-direction: column;
  & > :not(:first-child) {
    border-top: 1px solid ${theme === ThemeMode.DARK ? gray700 : gray100};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  & > :not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const HorizontalStyle = (theme: ThemeMode) => css`
  flex-direction: row;
  & > :not(:first-child) {
    border-left: 1px solid ${theme === ThemeMode.DARK ? gray700 : gray100};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const FillStyle = css`
  width: 100%;
  & > * {
    flex: 1 0 auto;
  }
`;

const ButtonGroupContainer = styled.div<ButtonGroupProps>`
  display: flex;
  ${props => (props.vertical ? VerticalStyle(props.theme.mode) : HorizontalStyle(props.theme.mode))}
  ${props => (props.fill ? FillStyle : '')}
`;
