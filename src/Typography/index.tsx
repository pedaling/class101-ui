import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../BreakPoints';
import { BaseProps } from '../interfaces/props';
import {
  body1,
  body2,
  caption1,
  caption2,
  display2,
  display3,
  headline1,
  headline2,
  headline3,
  subtitle1,
} from '../TextStyles';

export type Typo = keyof typeof typographyList;
export type TypoElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

interface OwnProps {
  md: Typo;
}

interface CommonTypoProps extends BaseProps {
  lg?: Typo;
  sm?: Typo;
  children?: React.ReactNode;
  element?: TypoElement;
}

interface HeadlinProps {
  display?: 2 | 3 | '2' | '3';
}

interface CommonTypoStyleProps {
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  textAlign?: string;
  fontWeight?: string | number;
}

type Props = OwnProps & CommonTypoProps & CommonTypoStyleProps;
export type TypoProps = CommonTypoProps & CommonTypoStyleProps & BaseProps;
export type HeadlineTypoProps = TypoProps & HeadlinProps;

const customStyle = css<CommonTypoStyleProps>`
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;

const displayStyle = css<{ display?: string | number }>`
  ${props =>
    props.display &&
    [2, '2'].includes(props.display) &&
    css`
      ${display2};
    `};
  ${props =>
    props.display &&
    [3, '3'].includes(props.display) &&
    css`
      ${display3};
    `};
`;

const defaultElement = {
  Headline1: 'h1',
  Headline2: 'h2',
  Headline3: 'h3',
  Subtitle1: 'h4',
  Body1: 'div',
  Body2: 'div',
  Caption1: 'div',
  Caption2: 'div',
};

const typographyList = {
  Headline1: headline1,
  Headline2: headline2,
  Headline3: headline3,
  Subtitle1: subtitle1,
  Body1: body1,
  Body2: body2,
  Caption1: caption1,
  Caption2: caption2,
};

const TextElement = styled.div<Props>`
  ${props => typographyList[props.md]}
  ${props =>
    props.sm
      ? `
    ${media.sm`
      ${typographyList[props.sm]}
    `}
  `
      : ''}
  ${props =>
    props.lg
      ? `
    ${media.lg`
      ${typographyList[props.lg]}
    `}
  `
      : ''}
  ${displayStyle}
  ${customStyle}
`;

export default class Typography extends PureComponent<Props> {
  public render() {
    const { lg, sm, md, element = defaultElement[this.props.md] as TypoElement, children, ...restProps } = this.props;
    return (
      <TextElement as={element} lg={lg} sm={sm} md={md} {...restProps}>
        {children}
      </TextElement>
    );
  }
}
