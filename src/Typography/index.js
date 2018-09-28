// @flow
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {
  display2,
  display3,
  headline1,
  headline2,
  headline3,
  subtitle1,
  body1,
  body2,
  caption1,
  caption2,
} from '../TextStyles';
import { gray800 } from '../Colors';
import { SIZES } from '../BreakPoints';

type Props = {
  lg?: string,
  md: string,
  sm?: string,
  children: Node,
};

type State = {
  width: number,
};

const customStyle = css`
  color: ${props => props.color || gray800};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
  margin-right: ${props => props.marginRight || 0}px;
`;

const Headline1 = styled.h1`
  ${headline1};
  ${props => [2, '2'].includes(props.display) && css`
    ${display2};
  `};
  ${props => [3, '3'].includes(props.display) && css`
    ${display3};
  `};
  ${customStyle};
`;

const Headline2 = styled.h2`
  ${headline2};
  color: ${props => props.color || gray800};
  font-weight: ${props => props.fontWeight || 'normal'};
  ${props => [2, '2'].includes(props.display) && css`
    ${display2};
  `};
  ${props => [3, '3'].includes(props.display) && css`
    ${display3};
  `};
  ${customStyle};
`;

const Headline3 = styled.h3`
  ${headline3};
  color: ${props => props.color || gray800};
  font-weight: ${props => props.fontWeight || 'normal'};
  ${props => [2, '2'].includes(props.display) && css`
    ${display2};
  `};
  ${props => [3, '3'].includes(props.display) && css`
    ${display3};
  `};
  ${customStyle};
`;

const Subtitle1 = styled.h4`
  ${subtitle1};
  ${customStyle};
`;

const Body1 = styled.div`
  ${body1};
  line-height: 24px;
  ${customStyle};
`;

const Body1Paragraph = styled.p`
  ${body1};
  line-height: 28px;
  ${customStyle};
`;

const Body2 = styled.div`
  ${body2};
  line-height: 20px;
  ${customStyle};
`;

const Body2Paragraph = styled.div`
  ${body2};
  line-height: 24px;
  ${customStyle};
`;

const Caption1 = styled.div`
  ${caption1};
  ${customStyle};
`;

const Caption2 = styled.div`
  ${caption2};
  ${customStyle};
`;

const getCurrentSize = (currentWidth: number) => {
  let windowSize = 'md';

  if (!currentWidth) {
    return windowSize;
  }

  Object.keys(SIZES).forEach((key) => {
    const size = SIZES[key];
    const conditions = Object.keys(size).map((sizeOption) => {
      const BreakPoint = size[sizeOption];
      if (BreakPoint && sizeOption === 'minWidth') {
        return currentWidth >= BreakPoint;
      } else if (BreakPoint && sizeOption === 'maxWidth') {
        return currentWidth <= BreakPoint;
      }
      return 'SKIP';
    });
    if (!conditions.includes(false) && conditions.join() !== 'SKIP,SKIP') {
      windowSize = key;
    }
    return windowSize;
  });

  return windowSize;
};

const capitalize = (string: ?string) => (string ? string[0].toUpperCase() + string.slice(1) : null);

const throttle = (callback, limit) => {
  let wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};

const TypographyList = {
  Headline1,
  Headline2,
  Headline3,
  Subtitle1,
  Body1,
  Body1Paragraph,
  Body2,
  Body2Paragraph,
  Caption1,
  Caption2,
};

export default class Typography extends Component<Props, State> {
  state = {
    width: 0,
  };

  componentDidMount() {
    const { lg, md, sm } = this.props;
    if ([lg, md, sm].filter(Boolean).length >= 2) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    const { lg, md, sm } = this.props;
    if ([lg, md, sm].filter(Boolean).length >= 2) {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }

  updateWindowDimensions = throttle(() => {
    console.log(window.innerWidth);
    this.setState({ width: window.innerWidth });
  }, 60)

  render() {
    const { width } = this.state;
    const { children, ...restProps } = this.props;

    const lg = capitalize(this.props.lg);
    const md = capitalize(this.props.md);
    const sm = capitalize(this.props.sm);

    let Element = null;
    if (!lg && md && !sm) {
      Element = TypographyList[md];
      return (
        <Element { ...restProps }>
          { children }
        </Element>
      );
    }

    const currentSize = getCurrentSize(width);
    if (lg && currentSize === 'lg') {
      Element = TypographyList[lg || md];
    } else if (md && currentSize === 'md') {
      Element = TypographyList[md];
    } else if (sm && currentSize === 'sm') {
      Element = TypographyList[sm || md];
    } else {
      Element = TypographyList[md || 'Body1'];
    }

    return (
      <Element { ...restProps }>
        { children }
      </Element>
    );
  }
}
