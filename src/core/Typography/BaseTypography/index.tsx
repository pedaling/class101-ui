import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../BreakPoints';
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
} from '../../TextStyles';

export type Typo = keyof typeof typographyList;
export type TypoElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

interface OwnProps {
  md: Typo;
}

export interface TypoProps {
  lg?: Typo;
  sm?: Typo;
  color?: string;
  textAlign?: string;
  fontWeight?: string | number;
  className?: string;
  children?: React.ReactNode;
  element?: TypoElement;
}

interface HeadlinProps {
  display?: 2 | 3 | '2' | '3';
}

type Props = OwnProps & TypoProps;
export type HeadlineTypoProps = TypoProps & HeadlinProps;

const customStyle = css<{ textAlign?: string }>`
  margin: 0;
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
  ${displayStyle}
  ${customStyle}
  ${props =>
    props.sm &&
    css`
      ${media.sm`
        ${typographyList[props.sm]}
        ${displayStyle}
        ${customStyle}
      `}
    `}
  ${props =>
    props.lg &&
    css`
      ${media.lg`
        ${typographyList[props.lg]}
        ${displayStyle}
        ${customStyle}
      `}
    `}
`;

export class BaseTypography extends PureComponent<Props> {
  public render() {
    const { lg, sm, md, element = defaultElement[this.props.md] as TypoElement, children, ...restProps } = this.props;
    return (
      <TextElement as={element} lg={lg} sm={sm} md={md} {...restProps}>
        {children}
      </TextElement>
    );
  }
}
