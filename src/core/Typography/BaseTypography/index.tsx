import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../BreakPoints';
import * as OUITextStyles from '../../OUITextStyles';
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
  subtitle2,
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
  'data-element-name'?: string;
}

interface HeadlinProps {
  display?: 2 | 3 | '2' | '3';
}

type Props = OwnProps & TypoProps;
export type HeadlineTypoProps = TypoProps & HeadlinProps;

const customStyle = css<{ textAlign?: string }>`
  margin: 0;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const displayStyle = css<{ display?: string | number }>`
  ${(props) => props.display
    && [2, '2'].includes(props.display)
    && css`
      ${display2};
    `};
  ${(props) => props.display
    && [3, '3'].includes(props.display)
    && css`
      ${display3};
    `};
`;

const defaultElement = {
  Headline1: 'h1',
  Headline2: 'h2',
  Headline3: 'h3',
  Subtitle1: 'h4',
  Subtitle2: 'h4',
  Body1: 'div',
  Body2: 'div',
  Caption1: 'div',
  Caption2: 'div',
  OUIHeadline1: 'h1',
  OUIHeadline2: 'h2',
  OUIHeadline3: 'h3',
  OUISubtitle1: 'h4',
  OUISubtitle2: 'h4',
  OUIBody1: 'div',
  OUIBody2: 'div',
  OUIBody3: 'div',
  OUICaption1: 'div',
  OUICaption2: 'div',
  OUICaption3: 'div',
};

const typographyList = {
  Headline1: headline1,
  Headline2: headline2,
  Headline3: headline3,
  Subtitle1: subtitle1,
  Subtitle2: subtitle2,
  Body1: body1,
  Body2: body2,
  Caption1: caption1,
  Caption2: caption2,
  OUIHeadline1: OUITextStyles.headline1,
  OUIHeadline2: OUITextStyles.headline2,
  OUIHeadline3: OUITextStyles.headline3,
  OUISubtitle1: OUITextStyles.subtitle1,
  OUISubtitle2: OUITextStyles.subtitle2,
  OUIBody1: OUITextStyles.body1,
  OUIBody2: OUITextStyles.body2,
  OUIBody3: OUITextStyles.body3,
  OUICaption1: OUITextStyles.caption1,
  OUICaption2: OUITextStyles.caption2,
  OUICaption3: OUITextStyles.caption3,
};

const TextElement = styled.div<Props>`
  ${(props) => typographyList[props.md]}
  ${displayStyle}
  ${customStyle}
  ${(props) => props.sm
    && css`
      ${media.sm`
        ${typographyList[props.sm]}
        ${displayStyle}
        ${customStyle}
      `}
    `}
  ${(props) => props.lg
    && css`
      ${media.lg`
        ${typographyList[props.lg]}
        ${displayStyle}
        ${customStyle}
      `}
    `}
`;

export class BaseTypography extends PureComponent<Props> {
  public render() {
    const {
      lg, sm, md, element = defaultElement[this.props.md] as TypoElement, children, ...restProps
    } = this.props;
    return (
      <TextElement as={element} lg={lg} sm={sm} md={md} {...restProps}>
        {children}
      </TextElement>
    );
  }
}
